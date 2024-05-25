
document.addEventListener('DOMContentLoaded', () => {
  const outputText = () => {
    const body = document.querySelector('body');
    const input = document.createElement('input');
    const p = document.createElement('p');

    body.append(input, p);

    input.addEventListener('input', () => {
      setTimeout(() => {
        p.textContent = input.value;
      }, 300);
    });
  };
  outputText();
});
