# Open-Source CRM

A customizable CRM for technical teams: build the objects, views, workflows, and agents your business needs, and ship them as code alongside the rest of your stack.

<br />

# Features

- **Custom objects and fields**: model your own data (deals, accounts, anything else) with typed fields
- **Views and layouts**: tables, kanban boards, and configurable record pages
- **Workflows**: automate repetitive processes with triggers and actions
- **AI agents and chat**: work with your CRM data through agents
- **Apps as code**: define objects, views, and logic functions in TypeScript and version them
- **Core CRM tools**: people, companies, opportunities, tasks, notes, email, and calendar sync

<br />

# Getting Started

### Prerequisites

- Node.js and Yarn 4
- PostgreSQL and Redis (run locally, or via Docker)

### Local setup

```bash
# Start Postgres + Redis, create the databases, copy .env files, and run migrations
bash packages/twenty-utils/setup-dev-env.sh

# Start the frontend, backend, and worker
yarn start
```

Setup script options:

- `--docker`: force Docker mode
- `--down`: stop services
- `--reset`: wipe data and restart fresh

### Useful commands

```bash
npx nx test twenty-front          # Frontend unit tests
npx nx test twenty-server         # Backend unit tests
npx nx lint:diff-with-main twenty-front
npx nx typecheck twenty-server
npx nx database:reset twenty-server
```

See [CLAUDE.md](./CLAUDE.md) for the full command reference and development conventions.

<br />

# Project Structure

```
packages/
├── twenty-front/          # React frontend application
├── twenty-server/         # NestJS backend API
├── twenty-ui/             # Shared UI components library
├── twenty-shared/         # Common types and utilities
├── twenty-emails/         # Email templates
├── twenty-docs/           # Documentation website
└── twenty-e2e-testing/    # Playwright E2E tests
```

<br />

# Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Nx](https://nx.dev/)
- [NestJS](https://nestjs.com/), with [BullMQ](https://bullmq.io/), [PostgreSQL](https://www.postgresql.org/), and [Redis](https://redis.io/)
- [React](https://reactjs.org/), with [Jotai](https://jotai.org/), [Linaria](https://linaria.dev/), and [Lingui](https://lingui.dev/)
