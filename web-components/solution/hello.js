class HelloWorld extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    const myElement = document.createElement("span");
    myElement.textContent = "Hello World";
    shadow.appendChild(myElement);
  }
}

customElements.define("hello-world", HelloWorld);