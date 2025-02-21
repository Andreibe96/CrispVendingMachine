import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  //change to your localhost address
  await page.goto("http://localhost:5173/");
});

test("Opens vending machine application", async ({ page }) => {
  await expect(page.getByTestId("display-screen")).toBeVisible();
});

test("Cancels purchase", async ({ page }) => {
  const cancelBtn = page.getByTestId("cancel-button");
  await cancelBtn.click();

  await expect(page.getByTestId("display-screen")).toContainText(
    "Purchase canceled."
  );
  await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
});

test.describe("Insert Change", () => {
  test.beforeEach(async ({ page }) => {
    const cancelBtn = page.getByTestId("cancel-button");
    await cancelBtn.click();
  });

  test("Deposit Nickle", async ({ page }) => {
    const nickleBtn = page.getByTestId("nickle-button");
    await nickleBtn.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.05");
  });

  test("Deposit Dime", async ({ page }) => {
    const dimeBtn = page.getByTestId("dime-button");
    await dimeBtn.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.10");
  });

  test("Deposit Quarter", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.25");
  });
});

test.describe("Make purchase", () => {
  test.beforeEach(async ({ page }) => {
    const cancelBtn = page.getByTestId("cancel-button");
    await cancelBtn.click();
  });

  test("Buy Cola - no change", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();

    const colaButton = page.getByRole("button", { name: "Cola", exact: true });
    await colaButton.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
    await expect(page.getByTestId("display-screen")).toHaveText(
      "Cola being dispensed."
    );
    await expect(page.getByTestId("display-screen")).not.toContainText(
      "being returned to you."
    );
  });

  test("Buy Cola - with change", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();
    await quarterBtn.click();

    const colaButton = page.getByRole("button", { name: "Cola", exact: true });
    await colaButton.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
    await expect(page.getByTestId("display-screen")).toContainText(
      "Cola being dispensed."
    );
    await expect(page.getByTestId("display-screen")).toContainText(
      "being returned to you."
    );
  });

  test("Fail to buy Cola", async ({ page }) => {
    const colaButton = page.getByRole("button", {
      name: "Cola",
      exact: true,
    });
    await colaButton.click();

    await expect(page.getByTestId("display-screen")).toContainText(
      "Not enough money deposited. Please insert"
    );
  });

  test("Buy Diet Cola - no change", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();
    const dimeBtn = page.getByTestId("dime-button");
    await dimeBtn.click();

    const dietColaButton = page.getByRole("button", {
      name: "Diet Cola",
      exact: true,
    });
    await dietColaButton.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
    await expect(page.getByTestId("display-screen")).toHaveText(
      "Diet Cola being dispensed."
    );
    await expect(page.getByTestId("display-screen")).not.toContainText(
      "being returned to you."
    );
  });

  test("Buy Diet Cola - with change", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();
    await quarterBtn.click();

    const dietColaButton = page.getByRole("button", {
      name: "Diet Cola",
      exact: true,
    });
    await dietColaButton.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
    await expect(page.getByTestId("display-screen")).toContainText(
      "Diet Cola being dispensed."
    );
    await expect(page.getByTestId("display-screen")).toContainText(
      "being returned to you."
    );
  });

  test("Fail to buy Diet Cola", async ({ page }) => {
    const dietColaButton = page.getByRole("button", {
      name: "Diet Cola",
      exact: true,
    });
    await dietColaButton.click();

    await expect(page.getByTestId("display-screen")).toContainText(
      "Not enough money deposited. Please insert"
    );
  });

  test("Buy water - no change", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();
    const dimeBtn = page.getByTestId("dime-button");
    await dimeBtn.click();
    await dimeBtn.click();

    const waterButton = page.getByRole("button", {
      name: "Water",
      exact: true,
    });
    await waterButton.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
    await expect(page.getByTestId("display-screen")).toHaveText(
      "Water being dispensed."
    );
    await expect(page.getByTestId("display-screen")).not.toContainText(
      "being returned to you."
    );
  });

  test("Buy Water - with change", async ({ page }) => {
    const quarterBtn = page.getByTestId("quarter-button");
    await quarterBtn.click();
    await quarterBtn.click();

    const waterButton = page.getByRole("button", {
      name: "Water",
      exact: true,
    });
    await waterButton.click();

    await expect(page.getByTestId("amount-deposited")).toContainText("$0.00");
    await expect(page.getByTestId("display-screen")).toContainText(
      "Water being dispensed."
    );
    await expect(page.getByTestId("display-screen")).toContainText(
      "being returned to you."
    );
  });

  test("Fail to buy Water", async ({ page }) => {
    const waterButton = page.getByRole("button", {
      name: "Water",
      exact: true,
    });
    await waterButton.click();

    await expect(page.getByTestId("display-screen")).toContainText(
      "Not enough money deposited. Please insert"
    );
  });

  test("Attemp to buy Lime Soda (out of stock)", async ({ page }) => {
    const limeSodaButton = page.getByRole("button", {
      name: "Lime Soda",
      exact: true,
    });

    await expect(limeSodaButton).toBeDisabled();
  });
});
