class Tooltip extends HTMLElement {
  toolTip = null;
  toolTipText = "Dummy Tool Text !";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this.toolTipText = this.getAttribute("text");
    }

    const tooltipIcon = document.createElement("span");
    tooltipIcon.innerText = "(?)";
    tooltipIcon.addEventListener("mouseenter", this.showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this.hideTooltip.bind(this));

    this.style.cursor = "help";
    this.style.position = "relative";
    this.shadowRoot.appendChild(tooltipIcon);
  }

  showTooltip() {
    this.toolTip = document.createElement("div");
    this.toolTip.innerText = this.toolTipText;
    this.toolTip.style.width = "100px";
    this.toolTip.style.border = "1px solid grey";
    this.toolTip.style.borderRadius = "5px";
    this.toolTip.style.fontSize = "8px";
    this.toolTip.style.fontFamily = "Verdana";
    this.toolTip.style.color = "white";
    this.toolTip.style.background = "black";
    this.toolTip.style.padding = "3px";

    this.toolTip.style.position = "absolute";
    this.toolTip.style.top = "-15px";
    this.toolTip.style.left = "10px";

    this.shadowRoot.appendChild(this.toolTip);
  }

  hideTooltip() {
    this.shadowRoot.removeChild(this.toolTip);
  }
}

customElements.define("uc-tooltip", Tooltip);
