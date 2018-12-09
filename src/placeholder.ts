import { bindable, observable } from "aurelia-framework";
import ReactElement from "aurelia-react-element";
import { Placeholder as ReactPlaceholder } from "@pnp/spfx-controls-react/lib/Placeholder";

export class Placeholder extends ReactElement {

  public component: any = ReactPlaceholder;

  @bindable public props = {};
  @bindable public iconText: string = "";
  @bindable public description: string = "";
  @bindable public buttonLabel: string = "";
  @bindable public webpartContext: any; // @microsoft/sp-webpart-base/WebPartContext (not typed to avoid dependency)
  private self: any = null; // dummy in order to let _onConfigure work

  public bind() {
    this.syncProps();
  }

  private iconTextChanged(newValue: string, oldValue: string) {
    this.syncProps();
  }

  private descriptionChanged(newValue: string, oldValue: string) {
    this.syncProps();
  }

  private buttonLabelChanged(newValue: string, oldValue: string) {
    this.syncProps();
  }

  private webpartContextChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }

  public syncProps() {
    this.props = {
      iconName: 'Edit',
      iconText: this.iconText,
      description: this.description,
      buttonLabel: this.buttonLabel,
      onConfigure: this._onConfigure,
      self: this
    };
  }

  private _onConfigure() {
    this.self.webpartContext.propertyPane.open();
  }
}