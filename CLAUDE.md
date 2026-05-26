# CLAUDE.md — Project Conventions

A living guide for how we build in this repo.

---

## Folder Structure

```
src/
  app/          # Routes, pages, layouts (file-based routing)
  api/          # Server functions, data fetching, external API clients
  shared/       # Reusable components, hooks, utilities, types, constants
```

## Component Patterns

- **One folder per component** with an `index.ts` barrel.
- Co-locate styles, tests, and sub-components inside the folder.
- Keep components small and focused; extract early.

Example:
```
shared/ui/Button/
  Button.tsx
  Button.test.tsx
  index.ts
```

## Code Style

Prettier configuration:

```json
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

- TypeScript strict mode.
- Prefer explicit types over implicit inference for public APIs.
- Use `function` declarations for components and handlers.

## Behavioral Guidelines

1. **Think before coding.** Read existing files first; never guess conventions.
2. **Simplicity first.** Favor straightforward solutions over clever abstractions.
3. **Surgical changes.** Edit only what is necessary; preserve the existing structure.
4. **Goal-driven execution.** Every change must serve a clear user or developer outcome.
