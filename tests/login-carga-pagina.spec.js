const { test, expect } = require('@playwright/test');
 
const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// CASO 5 - Verificar que la página de login carga correctamente
// REQUERIMIENTO: La página de login debe cargar correctamente mostrando todos sus elementos.
test('La página de login carga con todos sus elementos visibles', async ({ page }) => {
  await page.goto(URL);
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});