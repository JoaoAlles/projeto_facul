// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
  
      if (nome === '' || email === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
      } else if (!validateEmail(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
      } else if (!validateTelefone(telefone)) {
        alert('Por favor, insira um número de telefone válido (formato: XXXX-XXXX).');
      } else {
        alert('Formulário enviado com sucesso!');
        form.reset();
        window.location.replace('./sucesso.html'); // Utiliza o método replace() para redirecionar
      }
    });
  
    function validateEmail(email) {
      // Expressão regular para validar o formato do e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validateTelefone(telefone) {
      // Expressão regular para validar o formato do telefone (XXXX-XXXX)
      const telefoneRegex = /^\d{4}-\d{4}$/;
      return telefoneRegex.test(telefone);
    }
  });