const { test, expect } = require('@playwright/test');
 
const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// CASO 4 - Login con campos vacíos
// REQUERIMIENTO: El sistema debe validar que los campos de usuario y contraseña no estén vacíos.
test('Login con campos vacíos muestra errores de validación', async ({ page }) => {
  await page.goto(URL);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required')).toHaveCount(2);
});