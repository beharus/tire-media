
// CONTACTS STARTS
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.contacts');
    const successPopup = document.getElementById('audit-success');
    const errorPopup = document.getElementById('audit-error');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[placeholder="Иванов Иван"]').value.trim();
        const contact = form.querySelector('input[placeholder*="Почта"]').value.trim();
        const description = form.querySelector('textarea').value.trim();
        const consent = form.querySelector('#consent').checked;

        const directions = [...form.querySelectorAll('button[type="button"]')];
        const isDirectionSelected = directions.some(btn => btn.classList.contains('bg-black'));

        // Если что-то не заполнено
        if (!name || !contact || !description || !consent || !isDirectionSelected) {
            errorPopup.classList.remove('hidden');
            return;
        }

        // Очистка формы
        form.reset();
        directions.forEach(btn => btn.classList.remove('bg-black', 'text-white'));

        // Показ успешного окна
        successPopup.classList.remove('hidden');
    });

    // При клике по кнопке выбора направления — выделяем её
    document.querySelectorAll('button[type="button"]').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('bg-black');
            btn.classList.toggle('text-white');
        });
    });
});
// CONTACTS ENDS
