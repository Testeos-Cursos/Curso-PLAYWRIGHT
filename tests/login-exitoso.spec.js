const { test, expect } = require('@playwright/test');
 
const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
 
// CASO 1 - Login exitoso con credenciales válidas
// REQUERIMIENTO: El sistema debe permitir que un usuario ingrese con email y contraseña.
// Si los datos son correctos, redirige al dashboard.
test('Login exitoso con usuario y contraseña válidos', async ({ page }) => {
  await page.goto(URL);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);
});