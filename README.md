# AngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

Completed
 Add Product page/component created

 Cart page/component created and linked to product list

 Product List displays all added products with basic details

 Checkout page/component created and accessible from cart

Checkout Page TODO
 Set up /checkout route and confirm navigation from cart

 Build shipping address form (name, address, email, phone)

 Build payment details form (card number, expiry, CVV)

 Add Angular validation for all form fields (required/format checks)

 Display error messages for invalid inputs

 Show order summary with cart items and total price

 Disable “Place Order” if form is invalid

 Create Angular service to hold cart/checkout data in memory

 Implement “Place Order” action to update in-memory order & reset cart/form

 Show confirmation page/component after successful checkout

 Simulate error handling for failed checkout (mock error, display message)

 Test full user flow: cart → checkout → confirmation

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```
