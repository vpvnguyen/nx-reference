# Template

## Generate an application

Run `npx nx g @nrwl/react:app APP_NAME` to generate an application.

## Generate a library

Run `npx nx g @nrwl/react:lib LIB_NAME` to generate a library.

Run `npx nx g @nrwl/react:component COMPONENT_NAME --project=LIB_NAME --export` to generate a component under the target LIBRARY_NAME.

Libraries are shareable across libraries and applications. They can be imported from `@WORKSPACE_NAME/LIB_NAME`.

## Code scaffolding

Run `npx nx g @nrwl/react:component COMPONENT_NAME --project=APP_NAME` to generate a new component for your targeted app.

## Development server

Run `npx nx serve APP_NAME` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `npx nx serve nx run-many --target=serve --projects=APP_NAME,ANOTHER_APP_NAME --parallel --maxParallel=6` to start a dev server for each app.

## Build

Run `npx nx build APP_NAME` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npx nx test APP_NAME` to execute the unit tests via [Jest](https://jestjs.io).

Run `npx nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `npx nx e2e APP_NAME` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `npx nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `npx nx graph` to see a diagram of the dependencies of your projects.
