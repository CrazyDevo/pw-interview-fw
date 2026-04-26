
import { test, expect } from '@playwright/test';

test('get spartans', async ({ request }) => {

  const spartans = await request.get('/api/v2/spartans');
  expect(spartans.ok()).toBeTruthy();
});



test('post spartan', async ({ request }) => {

  const spartans = await request.post('/api/v2/spartans', {
    data: {
    
  "name": "Leonidas",
  "gender": "Male",
  "phone": "1234567890"

    }
  });

    
  expect(spartans.ok).toBeTruthy();
});