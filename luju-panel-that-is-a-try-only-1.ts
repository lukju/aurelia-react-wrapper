import { bindable, child, children } from "aurelia-framework";
import ReactElement from './src/react-element';
import {Panel as ReactPanel} from "office-ui-fabric-react";
import * as React from "react";


export class Panel extends ReactElement {

  @bindable props = {};
  component = ReactPanel;
  
  @child('panel-header') header: any = "Header Text";
  @children('div') body: any;

  @bindable open: boolean = false;

  bind() {
    this.syncProps();
    
  }

  syncProps() {
    let e = React.createElement('div', null, "Hello World!");
    this.props = { isOpen: this.open, isLightDismiss: true, headerText: this.header,  onDismiss: () => this.openChanged(false), children: "<div>Hi, there!</div>" };
  }

  openChanged(open: boolean) {
    console.log("open changed")
    console.log("panel-body: " + this.body)
    this.open = open;
    this.syncProps();
  }
}