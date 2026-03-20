# Publish A New Reusable Component (Step By Step)

This guide shows how to add and publish a new reusable component in this library.

Example target: a table component with search, sorting, and pagination.

## 1. Create a feature branch

```bash
git checkout -b feat/table-search-sort-pagination
```

## 2. Implement the component

Create a new component file under src/components.

Example:

- src/components/DataTable.tsx

Recommended props for a reusable data table:

- columns (header + accessor)
- rows (data array)
- searchable (boolean)
- sortable (boolean)
- paginated (boolean)
- pageSize (default value)
- onRowClick (optional callback)
- className, style, bsPrefix, unstyled (follow existing library pattern)

Implementation tips:

- Keep UI and data logic predictable and controlled through props.
- Use React useMemo for filtered/sorted/paginated rows.
- Keep accessibility in mind: proper table semantics, button labels, aria-sort.
- Keep bootstrap class strategy consistent with existing components.

## 3. Export from library entrypoint

Update src/index.ts:

- Export DataTable and DataTableProps.
- Add RS-prefixed alias export (for example RSDataTable).
- Add RSDataTableProps type alias.

Pattern to follow is the same as existing exports for Table and RSTable.

## 4. Add tests

Create tests in src/components/__tests__/DataTable.test.tsx.

Minimum test coverage:

- renders rows and columns
- search filters rows correctly
- sort toggles ascending/descending
- pagination changes visible rows
- empty-state behavior

Run tests:

```bash
npm test
```

## 5. Add Storybook stories

Create a story file:

- src/stories/DataTable.stories.tsx

Include stories for:

- default table
- searchable only
- sortable only
- searchable + sortable + paginated
- large dataset

Run Storybook locally:

```bash
npm run storybook
```

## 6. Validate project quality gates

Run all checks before publishing:

```bash
npm run typecheck
npm test
npm run build
npm run build-storybook
```

## 7. Update documentation

Update README.md usage snippet if the new component should be highlighted.

Optional:

- add migration note if API affects existing usage
- add release notes entry for the component

## 8. Bump version

Use semantic versioning:

- patch: bugfix only
- minor: new backward-compatible component/features
- major: breaking changes

Example (new component => usually minor):

```bash
npm version minor
```

If you only want to update version without auto git tag during a staged workflow:

```bash
npm version minor --no-git-tag-version
```

## 9. Commit and push

```bash
git add src/components/DataTable.tsx src/components/__tests__/DataTable.test.tsx src/stories/DataTable.stories.tsx src/index.ts README.md package.json package-lock.json
git commit -m "feat: add reusable DataTable with search sort pagination"
git push origin feat/table-search-sort-pagination
```

Then merge the PR to master/main.

## 10. Publish to npm

If publishing manually:

```bash
npm publish --access public
```

If publishing through CI:

- Create a GitHub release (if your publish workflow triggers on release).
- Ensure NPM_TOKEN is configured in repository secrets.

## 11. Verify the published package

After publish:

- Check npm page for the new version.
- Install in a sample app:

```bash
npm install @rishistack/rscomponents@latest bootstrap
```

- Confirm imports work:

```tsx
import { DataTable, RSDataTable } from '@rishistack/rscomponents';
```

## 12. Publish Storybook docs update

If Actions is enabled, your Storybook GitHub Pages workflow should deploy automatically on push.

If Actions is disabled, rebuild docs and publish via docs branch/folder strategy.

## Quick release checklist

- Component implemented with typed props
- Exported in src/index.ts (+ RS alias)
- Unit tests added and passing
- Storybook story added
- Typecheck, tests, and build passing
- README/docs updated
- Version bumped
- npm publish successful
