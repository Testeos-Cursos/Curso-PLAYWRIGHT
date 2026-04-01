const { test, expect } = require('@playwright/test');
 
const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// CASO 2 - Login fallido con contraseña incorrecta
// REQUERIMIENTO: Si los datos de acceso son incorrectos, el sistema debe mostrar un mensaje de error.
test('Login fallido con contraseña incorrecta', async ({ page }) => {
  await page.goto(URL);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('contraseniaMAL');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});