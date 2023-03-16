'use strict'; // Deixa o JS mais r'igido quanto a erros.

const switcher = document.querySelector(".btn"); // Cria uma variavel para quando a clase 'btn' for acionada.

switcher.addEventListener('click', function () { 
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  const className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
  
  console.log('current class name: ' + className); // C'odigo para auxiliar a depuração via DevTools.
});