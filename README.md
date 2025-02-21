# Andrei Belittchenko Crisp Take Home Assignment

This project is a simple vending machine that allows a user to choose from various beverages, insert change or cancel a transaction.

Automated testing done using Playwright.

### On initialization the machine will be loaded with:

- 5 of each coin (totaling $2)
- 10x Cola ($0.25)
- 8x Diet Cola ($0.35)
- 0x Lime Soda (out of stock - $0.25)
- 2x Water ($0.45)

### The user can then select from the following options:

- Cancel transaction (return all deposited money)
- Deposit nickle ($0.05)
- Deposit dime ($0.10)
- Deposit quarter ($0.25)
- Select Cola
- Select Diet Cola
- Select Lime Soda
- Select Water

## Instructions to run the application

1. Inside of the code tab on this github page, click on the Green "<>Code" button and select "Download ZIP".
2. Save the zip file to your directory of choice on your machine.
3. Unzip the project folder.
4. Ensure that you have VS Code downloaded on your machine, if not click on the following link and download/install [vscode](https://code.visualstudio.com/download)
5. Open the project folder in VS Code.
6. Ensure that you have Node downloaded on your machine, if not click on the following link and download/install [node](https://nodejs.org/en/download)
7. Open a terminal window (ensure you are in the main project directory) and enter the following commands:

```
npm i
npm run dev
```

- "npm i" installs necessary dependencies

7. You will see a local host link in your terminal, ctrl click on the link to open the application.

## Instructions to run automated tests

- Test can either be run standalone or with the application running
- Ensure the "npm i" command has already been run
- Steps 1 & 2 are optional, can be bypassed by running the application before running the test command.

1. Locate the "playwrightconfig.ts" file within the main project directory.
2. Scroll down to the "webServer:" property and change the "url:" to your local host.

- app will have to be run first to determine your local host address

3. Locate the "vmtests.spec.ts" file within the "tests" directory.
4. Change the localhost url to yours in the first "beforeEach" test.
5. Enter the following command in a new terminal tab to run tests within a browser window:

```
npx playwright test --ui
```
