const questions = document.querySelectorAll('.overview__question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const overviewItem = question.closest('.overview__item');
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');
        answer.classList.toggle('show');
        overviewItem.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});