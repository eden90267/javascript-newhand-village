const myForm = document.querySelector('#myForm');
const result = document.querySelector('#result');

myForm.addEventListener('submit', function(e) {
	e.preventDefault();
	localStorage.setItem('title', '黃色小鴨');
	localStorage.setItem('price', 200);
    showResult();
}, false);

function showResult() {
	const title = localStorage.getItem('title');
	const price = localStorage.getItem('price');
	result.innerHTML = `
      <li>商品名稱：${title}，價格：${price}
	`;
}