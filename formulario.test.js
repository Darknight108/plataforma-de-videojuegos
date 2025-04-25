/**
 * @jest-environment jsdom
 */

describe('Función del botón de Registro', () => {
    test('Debe cambiar el título y mostrar el campo de nombre', () => {
      document.body.innerHTML = `
        <div id="title">Login</div>
        <input id="nameInput" style="max-height: 0;" />
      `;
  
      const title = document.getElementById('title');
      const nameInput = document.getElementById('nameInput');
  
      function onSignUpClick() {
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Registro";
      }
  
      onSignUpClick();
  
      expect(title.innerHTML).toBe("Registro");
      expect(nameInput.style.maxHeight).toBe("60px");
    });
  });
  