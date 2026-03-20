import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

type SortDirection = 'asc' | 'desc';

export type DataTableColumn<T> = {
    key: string;
    header: React.ReactNode;
    accessor: (row: T) => React.ReactNode;
    sortAccessor?: (row: T) => string | number | Date | null | undefined;
    className?: string;
    headerClassName?: string;
};

export type DataTableProps<T> = BootstrapCommonProps & {
    columns: DataTableColumn<T>[];
    rows: T[];
    searchable?: boolean;
    searchPlaceholder?: string;
    searchFn?: (row: T, query: string) => boolean;
    sortable?: boolean;
    paginated?: boolean;
    pageSize?: number;
    pageSizeOptions?: number[];
    initialSortKey?: string;
    initialSortDirection?: SortDirection;
    emptyMessage?: React.ReactNode;
    wrapperClassName?: string;
    controlsClassName?: string;
    tableClassName?: string;
    paginationClassName?: string;
    onRowClick?: (row: T, index: number) => void;
    rowClassName?: string | ((row: T, index: number) => string | undefined);
};

function normalize(value: unknown): string {
    if (value == null) return '';
    if (value instanceof Date) return value.toISOString();
    return String(value).toLowerCase();
}

function compareValues(a: unknown, b: unknown): number {
    if (a == null && b == null) return 0;
    if (a == null) return -1;
    if (b == null) return 1;

    if (a instanceof Date && b instanceof Date) {
        return a.getTime() - b.getTime();
    }

    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
}

export function DataTable<T>({
    bsPrefix = 'table',
    className,
    unstyled,
    columns,
    rows,
    searchable = true,
    searchPlaceholder = 'Search...',
    searchFn,
    sortable = true,
    paginated = true,
    pageSize = 10,
    pageSizeOptions = [10, 25, 50],
    initialSortKey,
    initialSortDirection = 'asc',
    emptyMessage = 'No records found',
    wrapperClassName,
    controlsClassName,
    tableClassName,
    paginationClassName,
    onRowClick,
    rowClassName
}: DataTableProps<T>) {
    const [query, setQuery] = React.useState('');
    const [activeSortKey, setActiveSortKey] = React.useState<string | undefined>(initialSortKey);
    const [sortDirection, setSortDirection] = React.useState<SortDirection>(initialSortDirection);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [activePageSize, setActivePageSize] = React.useState(pageSize);

    const defaultSearchFn = React.useCallback(
        (row: T, searchQuery: string) => {
            const normalizedQuery = searchQuery.trim().toLowerCase();
            if (!normalizedQuery) return true;

            return columns.some((column) => normalize(column.accessor(row)).includes(normalizedQuery));
        },
        [columns]
    );

    const filteredRows = React.useMemo(() => {
        if (!searchable || !query.trim()) return rows;
        const matcher = searchFn ?? defaultSearchFn;
        return rows.filter((row) => matcher(row, query));
    }, [defaultSearchFn, query, rows, searchFn, searchable]);

    const sortedRows = React.useMemo(() => {
        if (!sortable || !activeSortKey) return filteredRows;

        const column = columns.find((item) => item.key === activeSortKey);
        if (!column) return filteredRows;

        const withIndex = filteredRows.map((row, index) => ({ row, index }));

        withIndex.sort((a, b) => {
            const accessor = column.sortAccessor ?? ((value: T) => column.accessor(value));
            const result = compareValues(accessor(a.row), accessor(b.row));
            if (result === 0) return a.index - b.index;
            return sortDirection === 'asc' ? result : -result;
        });

        return withIndex.map((item) => item.row);
    }, [activeSortKey, columns, filteredRows, sortDirection, sortable]);

    const totalRows = sortedRows.length;
    const totalPages = paginated ? Math.max(1, Math.ceil(totalRows / activePageSize)) : 1;

    React.useEffect(() => {
        setCurrentPage(1);
    }, [query, activePageSize, activeSortKey, sortDirection]);

    React.useEffect(() => {
        setCurrentPage((previous) => Math.min(previous, totalPages));
    }, [totalPages]);

    const visibleRows = React.useMemo(() => {
        if (!paginated) return sortedRows;
        const start = (currentPage - 1) * activePageSize;
        return sortedRows.slice(start, start + activePageSize);
    }, [activePageSize, currentPage, paginated, sortedRows]);

    function toggleSort(column: DataTableColumn<T>) {
        if (!sortable) return;
        setActiveSortKey((previousKey) => {
            if (previousKey !== column.key) {
                setSortDirection('asc');
                return column.key;
            }

            setSortDirection((previousDirection) => (previousDirection === 'asc' ? 'desc' : 'asc'));
            return previousKey;
        });
    }

    function sortIndicator(columnKey: string): string {
        if (activeSortKey !== columnKey) return '';
        return sortDirection === 'asc' ? ' \u2191' : ' \u2193';
    }

    const tableClasses = unstyled
        ? cx(className, tableClassName)
        : cx(bsPrefix, `${bsPrefix}-striped`, `${bsPrefix}-hover`, className, tableClassName);

    return (
        <div className={cx('w-100', wrapperClassName)}>
            <div className={cx('d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3', controlsClassName)}>
                {searchable ? (
                    <input
                        className={unstyled ? 'form-control' : cx('form-control', 'w-auto', 'flex-grow-1')}
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={searchPlaceholder}
                        aria-label="Search table"
                    />
                ) : (
                    <span />
                )}

                {paginated ? (
                    <div className="d-flex align-items-center gap-2">
                        <label className="form-label mb-0" htmlFor="rs-data-table-page-size">
                            Rows
                        </label>
                        <select
                            id="rs-data-table-page-size"
                            className="form-select form-select-sm"
                            value={activePageSize}
                            onChange={(event) => setActivePageSize(Number(event.target.value))}
                        >
                            {pageSizeOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : null}
            </div>

            <div className="table-responsive">
                <table className={tableClasses}>
                    <thead>
                        <tr>
                            {columns.map((column) => {
                                const isActive = activeSortKey === column.key;
                                const ariaSort = !sortable
                                    ? undefined
                                    : isActive
                                        ? sortDirection === 'asc'
                                            ? 'ascending'
                                            : 'descending'
                                        : 'none';

                                return (
                                    <th key={column.key} scope="col" className={column.headerClassName} aria-sort={ariaSort}>
                                        {sortable ? (
                                            <button
                                                type="button"
                                                className="btn btn-link p-0 text-decoration-none"
                                                onClick={() => toggleSort(column)}
                                            >
                                                {column.header}
                                                {sortIndicator(column.key)}
                                            </button>
                                        ) : (
                                            column.header
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {visibleRows.length > 0 ? (
                            visibleRows.map((row, index) => {
                                const rowClasses =
                                    typeof rowClassName === 'function'
                                        ? rowClassName(row, index)
                                        : rowClassName;

                                return (
                                    <tr
                                        key={index}
                                        className={rowClasses}
                                        onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                                        style={onRowClick ? { cursor: 'pointer' } : undefined}
                                    >
                                        {columns.map((column) => (
                                            <td key={column.key} className={column.className}>
                                                {column.accessor(row)}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4 text-muted">
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {paginated ? (
                <div className={cx('d-flex justify-content-between align-items-center mt-3', paginationClassName)}>
                    <small className="text-muted">
                        {totalRows === 0
                            ? 'Showing 0 results'
                            : `Showing ${(currentPage - 1) * activePageSize + 1}-${Math.min(currentPage * activePageSize, totalRows)} of ${totalRows}`}
                    </small>

                    <div className="btn-group" role="group" aria-label="Pagination controls">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                            disabled={currentPage <= 1}
                        >
                            Previous
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm" disabled>
                            {currentPage} / {totalPages}
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                            disabled={currentPage >= totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
