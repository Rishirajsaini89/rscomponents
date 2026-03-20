import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, type DataTableColumn } from '../components/DataTable';

type UserRow = {
    id: number;
    name: string;
    email: string;
    role: string;
};

const rows: UserRow[] = [
    { id: 1, name: 'Ava Patel', email: 'ava@example.com', role: 'Admin' },
    { id: 2, name: 'Ben Carter', email: 'ben@example.com', role: 'Editor' },
    { id: 3, name: 'Cora Singh', email: 'cora@example.com', role: 'Viewer' },
    { id: 4, name: 'Dev Sharma', email: 'dev@example.com', role: 'Editor' },
    { id: 5, name: 'Eli Wong', email: 'eli@example.com', role: 'Viewer' },
    { id: 6, name: 'Fiona Roy', email: 'fiona@example.com', role: 'Admin' },
    { id: 7, name: 'Gabe Khan', email: 'gabe@example.com', role: 'Editor' },
    { id: 8, name: 'Hana Das', email: 'hana@example.com', role: 'Viewer' }
];

const columns: DataTableColumn<UserRow>[] = [
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
        key: 'email',
        header: 'Email',
        accessor: (row) => row.email,
        sortAccessor: (row) => row.email
    },
    {
        key: 'role',
        header: 'Role',
        accessor: (row) => row.role,
        sortAccessor: (row) => row.role
    }
];

function StoryDataTable(props: {
    searchable?: boolean;
    sortable?: boolean;
    paginated?: boolean;
    pageSize?: number;
}) {
    return <DataTable<UserRow> columns={columns} rows={rows} {...props} />;
}

const meta = {
    title: 'Components/RSDataTable',
    component: StoryDataTable,
    args: {
        searchable: true,
        sortable: true,
        paginated: true,
        pageSize: 5
    },
    tags: ['autodocs']
} satisfies Meta<typeof StoryDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SearchOnly: Story = {
    args: {
        sortable: false,
        paginated: false
    }
};

export const SortOnly: Story = {
    args: {
        searchable: false,
        paginated: false
    }
};

export const SearchSortPaginate: Story = {
    args: {
        searchable: true,
        sortable: true,
        paginated: true,
        pageSize: 3
    }
};
