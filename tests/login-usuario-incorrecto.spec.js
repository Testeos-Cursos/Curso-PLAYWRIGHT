const { test, expect } = require('@playwright/test');
 
const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// CASO 3 - Login fallido con usuario incorrecto
// REQUERIMIENTO: Si los datos de acceso son incorrectos, el sistema debe mostrar un mensaje de error.
test('Login fallido con usuario incorrecto', async ({ page }) => {
  await page.goto(URL);
  await page.getByPlaceholder('Username').fill('usuarioInexistente');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});