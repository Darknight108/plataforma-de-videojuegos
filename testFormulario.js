const { Builder, By } = require('selenium-webdriver');

async function runTests() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    // Abre el archivo local formulario.html (ajusta el path si es necesario)
    await driver.get('file:///C:/Plataforma-de-videojuegos-3/formulario.html');

    // Prueba 1: Clic en 'Login' y verificar título
    await driver.findElement(By.id('signIn')).click();
    let titleLogin = await driver.findElement(By.id('title')).getText();
    console.log('✔️ Título después de Login:', titleLogin);

    // Prueba 2: Clic en 'Registro' y verificar título
    await driver.findElement(By.id('signUp')).click();
    let titleRegister = await driver.findElement(By.id('title')).getText();
    console.log('✔️ Título después de Registro:', titleRegister);

    // Prueba 3: Verificar estilo aplicado al campo nombre
    let nameInput = await driver.findElement(By.id('nameInput'));
    let style = await nameInput.getCssValue('max-height');
    console.log('✔️ max-height del campo nombre:', style);

  } catch (err) {
    console.error('❌ Error en pruebas:', err);
  } finally {
    await driver.quit();
  }
}

runTests();
