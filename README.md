# PassGen

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running tests

To execute the unit tests for this application, run:

```bash
ng test
```

This will launch the test runner in the interactive watch mode.

## Continuous Integration

The tests for this application are also configured to run automatically using GitHub Actions. This ensures that all tests are executed on every push and pull request to the repository, helping to maintain code quality and catch issues early.

## Application Overview

PassGen is a simple password generator application built with Angular. It allows users to generate secure passwords based on selected criteria such as length, inclusion of uppercase letters, numbers, and symbols.

### Features

- Specify the length of the password (minimun 4 chars).
- Option to include uppercase letters.
- Option to include numbers.
- Option to include symbols.
- Generated password is displayed on the screen.

## Usage

1. Open the application in your browser.
2. Use the form to specify the desired password criteria:
   - Enter the desired length of the password.
   - Check the boxes to include uppercase letters, numbers, and/or symbols.
3. Click the "Generate password" button.
4. The generated password will be displayed below the form.

## Deployed Application

You can view the deployed application at https://passs-gen.vercel.app

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
