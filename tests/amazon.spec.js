import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Damazon%26oq%3Damazon%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDg5MjdqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DZROEauf_I6jgseMPoIvxkQo&q=EhAkAUkAiEwqXAyMvN7k93mbGOWmkNQGIjA1iPyeUHxXGijc4-SKiAa10Fa85aN9fm0Pyk-kDiNB3Wnyn7dG17sUB13r1P58CGcyAVJaAUM');
  await page.locator('iframe[name="a-srgobay7rggt"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="10"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="10"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="10"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="9"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="13"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="14"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-srgobay7rggt"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('#tads').getByRole('link', { name: 'Amazon.in | Great Prices |' }).click();
});