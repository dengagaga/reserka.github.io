document.addEventListener("DOMContentLoaded", function() {
    const textContainers = document.querySelectorAll('.slide__text');

    textContainers.forEach(function(textContainer) {
        const paragraph = textContainer.querySelector('p');
        const maxHeight = 70; // Максимальная высота в пикселях
        let isExpanded = false;

        if (paragraph.offsetHeight > maxHeight) {
            paragraph.style.overflow = 'hidden';
            paragraph.style.maxHeight = maxHeight + 'px';
            const button = document.createElement('button');
            button.textContent = 'показать ещё';
            button.classList.add('slide__button');
            textContainer.appendChild(button); // Добавляем кнопку внутрь контейнера с текстом

            button.addEventListener('click', function() {
                isExpanded = !isExpanded;
                if (isExpanded) {
                    paragraph.style.maxHeight = 'none';
                    button.textContent = 'Свернуть';
                } else {
                    paragraph.style.maxHeight = maxHeight + 'px';
                    button.textContent = 'показать ещё';
                }
            });
        }
    });
});
