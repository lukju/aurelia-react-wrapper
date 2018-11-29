import { bindable, observable } from "aurelia-framework";
import ReactElement from "aurelia-react-element";
import { Panel as ReactPanel, PanelType } from "office-ui-fabric-react";

export class Panel extends ReactElement {

  public component: any = ReactPanel;

  @bindable public props = {};
  @bindable public type: PanelType = PanelType.smallFixedFar;
  @bindable public isOpen: boolean = false;
  @bindable public headerText: string = "";

  public bind() {
    this.syncProps();
  }

  private typeChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }

  private isOpenChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }

  private headerTextChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }

  public syncProps() {
    this.props = { 
      type: this.type, 
      isOpen: this.isOpen, 
      headerText : this.headerText };
  }
}