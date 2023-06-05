document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const arquivoInput = document.getElementById('anexo');

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
      alert('Por favor, insira um número de telefone válido (formato: (XX)XXXXX-XXXX).');
    } else if (arquivoInput.files.length === 0) {
      alert('Por favor, anexe um arquivo antes de enviar o formulário.');
    } else {
      form.reset();
      window.location.href = './sucesso.html';
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateTelefone(telefone) {
    const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    return telefoneRegex.test(telefone);
  }
  
  arquivoInput.addEventListener('change', function() {
    if (arquivoInput.files.length === 0) {
      alert('Por favor, anexe um arquivo antes de enviar o formulário.');
    }
  });
});
