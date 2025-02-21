# Andrei Belittchenko Crisp Take Home Assignment

This project is a simple vending machine that allows a user to choose from various beverages, insert change or cancel a transaction.

On initialization the machine will be loaded with:

- 5 of each coin (totaling $2)
- 10x Cola ($0.25)
- 8x Diet Cola ($0.35)
- 0x Lime Soda (out of stock - $0.25)
- 2x Water ($0.45)

The user can then select from the following options:

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
2. Save the zip file to your directory of choice on your machimn.
3. Unzip the project folder.
4. Open the project folder in VS Code.
5. Ensure that you have Node downloaded on your machine, if not click on the following link and download/install [node](https://nodejs.org/en/download)
6. Open a terminal window (ensure you are in the main project directory "/crsip-vending-machine") and enter the following commands:

```
npm i
npm run dev
```

- "npm i" installs necessary dependencies

7. You will see a local host link in your terminal, ctrl click on the link to open the application.
