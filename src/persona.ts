import { bindable, observable } from "aurelia-framework";
import ReactElement from "aurelia-react-element";
import { Persona as ReactPersona } from "office-ui-fabric-react";

export class Persona extends ReactElement {

  public component: any = ReactPersona;

  @bindable public props = {};
  @bindable public text: string = "";
  @bindable public imageUrl: string = "";
  @bindable public personaSize: string = "10";

  public bind() {
    this.syncProps();
  }

  private textChanged(newValue: string, oldValue: string) {
    this.syncProps();
  }

  private imageUrlChanged(newValue: string, oldValue: string) {
    this.syncProps();
  }

  public syncProps() {
    this.props = { 
      text: this.text, 
      imageUrl: this.imageUrl, 
      size : parseInt(this.personaSize) };
  }
}