function changeText(button, result) {
  const parent = button.parentElement;
  button.style.display = 'none';  // 버튼 숨기기

  // 텍스트를 보여줄 span 생성 또는 재사용
  let span = parent.querySelector('.result_text');
  if (!span) {
    span = document.createElement('span');
    span.className = 'result_text';
    parent.appendChild(span);
  }

  span.textContent = result;
}