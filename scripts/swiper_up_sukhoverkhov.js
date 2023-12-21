document.addEventListener('DOMContentLoaded', function () {
	// Створення кнопки
	var swiperButton = document.createElement('div');
	swiperButton.className = 'swiper-button';
	document.body.appendChild(swiperButton);

	// Обробник кліку на кнопку
	swiperButton.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// Обробник прокручування
	window.addEventListener('scroll', function () {
		if (window.scrollY > 100) {
			swiperButton.style.display = 'block';
		} else {
			swiperButton.style.display = 'none';
		}
	});
});
