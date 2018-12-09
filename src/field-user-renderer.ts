import { bindable, observable } from "aurelia-framework";
import ReactElement from "./react-element";
import { FieldUserRenderer as ReactFieldUserRenderer } from "@pnp/spfx-controls-react/lib/FieldUserRenderer";

export class FieldUserRenderer extends ReactElement {

  public component: any = ReactFieldUserRenderer;

  @bindable public props = {};
  @bindable public cssProps: any = null; // React.CSSProperties
  @bindable public className: any = null; // ICssInput
  @bindable public users: any = null; // IPrincipal
  @bindable public webpartContext: any = null; // @microsoft/sp-webpart-base/WebPartContext (not typed to avoid dependency)

  public bind() {
    this.syncProps();
  }

  private cssPropsChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }  
  
  private classNameChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }  
  
  private usersChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }

  private webpartContextChanged(newValue: any, oldValue: any) {
    this.syncProps();
  }

  public syncProps() {
    this.props = {
      cssProps: this.cssProps,
      className: this.className,
      users: this.users,
      context: this.webpartContext
    };
  }
}