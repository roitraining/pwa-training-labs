import {LitElement, html, css} from './lit.js';

export class DropElement extends LitElement {
  static get styles() {
    return css`
      .mouseover {
          border: 1px solid black;
        }
    `;
  }

  static get properties() {
    return {
      _isOver: {type: Boolean, state: true},
    };
  }

  constructor() {
    super();
    this.size = 160;
    this.value = 'data:image/png;base64,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';
  }

  render() {
    return html`
      <div>
      TODO add html here
      </div>
    `;
  }

  _onDragOver(e) {
    e.preventDefault();
    this._isOver = true;
  }

  _onDragLeave(e) {
    this._isOver = false;
  }

  _onDrop(e) {
      e.preventDefault();
      const $this = this;
      $this._isOver = false;
      let newHeight;
      let newWidth;
      let files = e.target.files || e.dataTransfer.files;
      if (files && files.length > 0) {
          let f = files[0];
          let reader = new FileReader();
          reader.onload = (function (theFile) {
              return function (e2) {
                  let image = new Image();
                  image.onload = function () {
                      newHeight = this.height;
                      newWidth = this.width;
                      if (this.height > $this.size) {
                          newHeight = $this.size;
                          newWidth = (newHeight * this.width) / this.height;
                      }
                      if (newWidth > $this.size) {
                          let oldWidth = newWidth;
                          newWidth = $this.size;
                          newHeight = (newWidth * newHeight) / oldWidth;
                      }
                      let canvas = document.createElement("canvas");
                      let ctx = canvas.getContext("2d");
                      canvas.width = newWidth;
                      canvas.height = newHeight;
                      ctx.drawImage(image, 0, 0, newWidth, newHeight);
                      $this.value = canvas.toDataURL(f.type);

                  };
                  image.src = e2.target.result;
              };
          })(f);
          reader.readAsDataURL(f);
      }
  }

}

window.customElements.define('drop-element', DropElement);
