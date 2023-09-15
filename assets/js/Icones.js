class Icones {
    constructor() {
        this.listaIcones = document.querySelectorAll('.icone');
    }

    animaIcones() {
        gsap.to(this.listaIcones, {duration: 1, scale: .95, repeat: -1, yoyo: true});
    }
}

export {Icones}