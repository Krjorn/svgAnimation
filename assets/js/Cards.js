class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('sections-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards() {
        if(window.matchMedia('(min-width: 768px)').matches) {
            window.requestAnimationFrame(this.calculoScroll.bind(this));
        }
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];

        if(posicao >= 100) {
            this.cardEsq.style.transform = `translate(${(-posicao+100)/10}%)`;
            this.cardDir.style.transform = `translate(${(posicao-100)/10}%)`;
        }
    }
}

export {Cards}