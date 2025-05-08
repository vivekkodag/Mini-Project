const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      display.value = '';
    } else if (button.textContent === 'DEL') {
      display.value = display.value.slice(0, -1);
    } else if (button.textContent === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += button.textContent;
    }
  });
});
