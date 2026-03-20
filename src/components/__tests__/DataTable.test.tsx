import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RSDataTable, type DataTableColumn } from '../../index';

type Row = {
    id: number;
    name: string;
    role: string;
};

const columns: DataTableColumn<Row>[] = [
    {
        key: 'id',
        header: 'ID',
        accessor: (row) => row.id,
        sortAccessor: (row) => row.id
    },
    {
        key: 'name',
        header: 'Name',
        accessor: (row) => row.name,
        sortAccessor: (row) => row.name
    },
    {
        key: 'role',
        header: 'Role',
        accessor: (row) => row.role,
        sortAccessor: (row) => row.role
    }
];

const rows: Row[] = [
    { id: 3, name: 'Charlie', role: 'Viewer' },
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'Editor' }
];

describe('RSDataTable', () => {
    it('renders rows and columns', () => {
        render(<RSDataTable<Row> columns={columns} rows={rows} paginated={false} />);

        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Role')).toBeInTheDocument();
        expect(screen.getByText('Charlie')).toBeInTheDocument();
        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.getByText('Bob')).toBeInTheDocument();
    });

    it('filters rows by search input', () => {
        render(<RSDataTable<Row> columns={columns} rows={rows} paginated={false} />);

        fireEvent.change(screen.getByRole('searchbox', { name: 'Search table' }), {
            target: { value: 'alice' }
        });

        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.queryByText('Bob')).not.toBeInTheDocument();
        expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
    });

    it('sorts rows by clicked column', () => {
        render(<RSDataTable<Row> columns={columns} rows={rows} paginated={false} />);

        const nameSortButton = screen.getByRole('button', { name: 'Name' });
        fireEvent.click(nameSortButton);

        const dataRowsAsc = screen.getAllByRole('row').slice(1);
        expect(dataRowsAsc[0]).toHaveTextContent('1AliceAdmin');
        expect(dataRowsAsc[1]).toHaveTextContent('2BobEditor');
        expect(dataRowsAsc[2]).toHaveTextContent('3CharlieViewer');

        fireEvent.click(nameSortButton);

        const dataRowsDesc = screen.getAllByRole('row').slice(1);
        expect(dataRowsDesc[0]).toHaveTextContent('3CharlieViewer');
        expect(dataRowsDesc[1]).toHaveTextContent('2BobEditor');
        expect(dataRowsDesc[2]).toHaveTextContent('1AliceAdmin');
    });

    it('supports pagination controls', () => {
        render(<RSDataTable<Row> columns={columns} rows={rows} pageSize={2} />);

        expect(screen.getByText('Charlie')).toBeInTheDocument();
        expect(screen.getByText('Alice')).toBeInTheDocument();
        expect(screen.queryByText('Bob')).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Next' }));

        expect(screen.getByText('Bob')).toBeInTheDocument();
        expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
    });

    it('shows empty state message when no rows match', () => {
        render(<RSDataTable<Row> columns={columns} rows={rows} paginated={false} />);

        fireEvent.change(screen.getByRole('searchbox', { name: 'Search table' }), {
            target: { value: 'not-found' }
        });

        expect(screen.getByText('No records found')).toBeInTheDocument();
    });
});
