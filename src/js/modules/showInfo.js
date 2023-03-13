export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                /* Изменить кнопку на минус и обратно на плюс */
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                console.log(sibling);

                sibling.classList.add('animated');
                sibling.classList.toggle('msg');
                sibling.classList.toggle('fadeIn');

                /* btn.children.removeChild('path'); */

                sibling.style.marginTop = '20px';
            });
        })
    }
}