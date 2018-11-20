import { bindable } from "aurelia-framework";
import ReactElement from "aurelia-react-element";
import {ColorPicker as ReactColorPicker} from "office-ui-fabric-react";


export class ColorPicker extends ReactElement {

    @bindable props = {};
  component: any = ReactColorPicker;
  
  @bindable color: string = "#ffffff";

  bind() {
    this.syncProps();
  }

  syncProps() {
    this.props = { color: this.color, onColorChanged: (color: string) => { this.colorChanged(color); } };
  }

  colorChanged(color: string) {
      this.color = color;
    this.syncProps();
  }
}