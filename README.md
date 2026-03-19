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

## Dev

```bash
npm install
npm run typecheck
npm test
npm run build
```

## Storybook

```bash
npm run storybook
```

Build static docs:

```bash
npm run build-storybook
```

## Components Included

- `RSAlert`
- `RSBadge`
- `RSBootstrapElement`
- `RSButton`
- `RSCard`
- `RSContainer`, `RSRow`, `RSCol`
- `RSDropdown`, `RSDropdownItem`
- `RSTextBox` (alias of `RSFormInput`)
- `RSModal`
- `RSNav`, `RSNavItem`, `RSNavLink`
- `RSNavbar`, `RSNavbarBrand`, `RSNavbarText`
- `RSOffcanvas`
- `RSTable`

## Publish Workflow

GitHub Actions file: `.github/workflows/publish.yml`

To publish from CI:

- set npm package name in `package.json`
- create repository secret `NPM_TOKEN`
- create a GitHub Release (or run workflow manually)

## Publish To npm

First publish from your machine:

```bash
npm install
npm run typecheck
npm test
npm run build
npm login
npm publish
```

Because `publishConfig.access` is set to `public`, the scoped package publishes as a public package.

Before publishing, verify:

- you own the npm scope `@rishistack`
- the package version in `package.json` is new and not already published
- `dist/` is generated successfully

For the next release:

```bash
npm version patch
npm publish
```

You can also publish through GitHub Actions after setting `NPM_TOKEN`.

## Customization Pattern

Each component supports:

- `className` and `style`
- `bsPrefix` to override bootstrap base class
- native HTML attributes via `...rest`
- extra behavior props specific to the component

Use these patterns to add wrappers for more Bootstrap elements.

Note: non-prefixed exports (for example `Button`, `FormInput`) are still available for backward compatibility.
