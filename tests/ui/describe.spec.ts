import { test, expect } from '@playwright/test';

//1
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://the-internet-5chk.onrender.com/');
  });

test.describe('A/B Testing Functionality', () => {

    //2
  test.beforeEach(async ({ page }) => {
    await page.getByRole('link',{ name: 'A/B Testing' }).click();
    // Go to the starting url before each test.
await expect(page.getByRole('heading',{ name: 'A/B Testing' })).toBeVisible();
  });

  //3
  test('verify test 1', async ({ page }) => {
    // Assertions use the expect API.
   
  });

  //3
  test('verify test 2', async ({ page }) => {
    // Assertions use the expect API.
    
  });
});


test.describe('Add/Remove Elements', () => {
  //2
   test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
       await page.getByRole('link',{ name: 'Add/Remove Elements' }).click();
await expect(page.getByRole('heading',{ name: 'Add/Remove Elements' })).toBeVisible();
  });
  //3
  test('valid login', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  //3
  test('invalid login', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});