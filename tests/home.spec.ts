import { test, expect } from '@playwright/test'

test('home page loads with logo', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('img[alt="Applied AI"]').first()).toBeVisible()
})

test('explore page loads', async ({ page }) => {
  await page.goto('/explore/')
  await expect(page.locator('h1')).toContainText('Align yourself')
})

test('explore page has tools', async ({ page }) => {
  await page.goto('/explore/')
  await page.evaluate(() => window.scrollTo(0, 600))
  await expect(page.locator('text=AI Assistants')).toBeVisible()
})

test('mailing list form renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('input[type="email"]')).toBeVisible()
})

test('footer has disclaimer', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('footer')).toContainText('student organization')
})
