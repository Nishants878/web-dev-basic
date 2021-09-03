// Define the WebComponent
class HelloWorld extends HTMLElement {
  constructor() {
    super();
    console.log("Hello Web Component !");
  }
}

// register the webcomponent
customElements.define("uc-helloworld", HelloWorld);
