# rscomponents

A customizable React + TypeScript component library that wraps Bootstrap classes.

## Install

```bash
npm install @rishistack/rscomponents bootstrap
```

## Bootstrap CSS

Import Bootstrap once in your app entry file:

```ts
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Usage

```tsx
import {
  RSAlert,
  RSButton,
  RSCard,
  RSDropdown,
  RSModal,
  RSNav,
  RSNavbar,
  RSOffcanvas,
  RSTable,
  RSTextBox
} from '@rishistack/rscomponents';

export function Example() {
  return (
    <RSCard title="Welcome" body="Everything is customizable.">
      <RSAlert variant="success">Saved successfully</RSAlert>
      <RSTextBox label="Email" placeholder="name@company.com" className="mb-3" />
      <RSButton variant="primary" size="lg">Continue</RSButton>
    </RSCard>
  );
}
```

## Data Table Example

```tsx
import { RSDataTable, type DataTableColumn } from '@rishistack/rscomponents';

type UserRow = {
  id: number;
  name: string;
  email: string;
};

const columns: DataTableColumn<UserRow>[] = [
  { key: 'id', header: 'ID', accessor: (row) => row.id, sortAccessor: (row) => row.id },
  { key: 'name', header: 'Name', accessor: (row) => row.name, sortAccessor: (row) => row.name },
  { key: 'email', header: 'Email', accessor: (row) => row.email, sortAccessor: (row) => row.email }
];

const rows: UserRow[] = [
  { id: 1, name: 'Ava Patel', email: 'ava@example.com' },
  { id: 2, name: 'Ben Carter', email: 'ben@example.com' },
  { id: 3, name: 'Cora Singh', email: 'cora@example.com' }
];

export function UsersTable() {
  return (
    <RSDataTable
      columns={columns}
      rows={rows}
      searchable
      sortable
      paginated
      pageSize={10}
    />
  );
}
```

## Storybook

```bash
npm run storybook
```

Build static docs:

```bash
npm run build-storybook
```

Step-by-step component publishing guide:

- [docs/PUBLISH_NEW_COMPONENT.md](docs/PUBLISH_NEW_COMPONENT.md)

## Components

Includes Bootstrap-wrapped primitives and layout/navigation/form components such as alerts, buttons, badges, cards, dropdowns, navbars, modals, offcanvas, tables, and form inputs.

For complete props and examples, use Storybook.

## Customization Pattern

Each component supports:

- `className` and `style`
- `bsPrefix` to override bootstrap base class
- native HTML attributes via `...rest`
- extra behavior props specific to the component

Use these patterns to add wrappers for more Bootstrap elements.

Note: non-prefixed exports (for example `Button`, `FormInput`) are still available for backward compatibility.
