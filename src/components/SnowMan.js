class SnowMan extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
                --snowman-width: var(--size) * 0.35;
                --snowman-height: var(--size) * 0.65;
            }

            .container {
                display: grid;
                place-items: end center;
                place-content: end center;
                background: red;
                width: calc(var(--snowman-width));
                height: calc(var(--snowman-height));

                /*esto es para compartir las cosas comunes!*/
                & :is( .head, .body) {
                    background: #ffffff;
                    width: var(--size);
                    height: var(--size);
                    border-radius: 50%; /*redondear el cuadrado*/
                }

                & .head {
                    --size: 90px;
                }

                & .body {
                    --size: 150px;
                }
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${SnowMan.styles}</style>
        <div class="container">
            <div class="head"></div>
            <div class="body"></div>
        </div>
        `;
    }
}

customElements.define("snow-man", SnowMan);