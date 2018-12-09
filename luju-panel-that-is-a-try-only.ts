import { bindable} from "aurelia-framework";

declare var fabric: any;
export class PanelCustomElement {

  @bindable open: boolean = false;
  @bindable title: string = '';
  @bindable position: 'left' | 'right' = 'right';
  @bindable size: 'md' | 'lg' | 'xl' | 'xxl' = 'md';

  private wasAlreadyOpen = false;
  openChanged() {
    if (this.open) {
      new fabric['Panel'](this.panel);

      setTimeout(() => {
        if (this.panel.parentElement) {
          let e = this.panel.parentElement.querySelector('.ms-Overlay');
          if (e) {
            e.addEventListener('click', this.onClosed.bind(this));
          }
          if (!this.wasAlreadyOpen) {
            this.wasAlreadyOpen = true;
            let e = this.panel.parentElement.querySelector('.ms-Panel-closeButton');
            if (e) {
              e.addEventListener('click', this.onClosed.bind(this));
            }
          }
        }
      }, 100)
    }
  }

  private onClosed() {
    this.open = false;
  }

  protected panel: HTMLElement = document.body;
}