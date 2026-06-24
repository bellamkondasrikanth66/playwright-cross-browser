const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Cross-Browser E2E Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the base URL configured in playwright.config.js
    await page.goto('/');
  });

  test('Flow 1: Successful Authentication & Navigation', async ({ page }) => {
    // Act: Log in with standard user
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Assert: Verify redirect to the inventory page
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Flow 2: Product Sorting & Data Display Verification', async ({ page }) => {
    // Pre-requisite: Log in
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Act: Sort products by price (low to high)
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    // Assert: Verify the first item is the lowest price ($7.99)
    const firstItemPrice = await page.locator('.inventory_item_price').first().innerText();
    expect(firstItemPrice).toBe('$7.99');
  });

  test('Flow 3: End-to-End Cart Checkout Form Submission', async ({ page }) => {
    // Log in
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Act: Add item to cart and navigate to checkout
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    // Fill out the Checkout Information Form
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    // Finalize purchase
    await page.locator('[data-test="finish"]').click();

    // Assert: Verify order completion message
    const header = await page.locator('.complete-header');
    await expect(header).toHaveText('Thank you for your order!');
  });
});