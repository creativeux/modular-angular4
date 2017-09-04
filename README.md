# A4appScss

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2 and modified (for better or for worse) by Aaron Stone...

## Changes Aaron made
1. Moved as many configuration files into the `/config` directory to clean up the cluttered root.
2. Group modules within `/src` as peers to `app` for organization. Added a shared module for experimentation.
3. Moved global styling into the `shared/assets/styles` folder. All components will have encapsulated SASS.
4. Moved the `hello` component that is by default bundled with `app` into the `core` module.
5. Moved `/e2e` into `/test` to compartmentalize QA-generated tests. I also see page-level e2e and component integration tests as different things, so this would be a container for non-unit integration and e2e tests.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
