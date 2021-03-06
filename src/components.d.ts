/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OdsBanner {
        /**
          * Displays the banner
         */
        "active"?: boolean;
        /**
          * The human-readable content displayed along side the headline within the banner.
         */
        "content": string;
        /**
          * Displays a dismiss button for the banner
         */
        "dismissable"?: boolean;
        /**
          * The title of the banner.
         */
        "headline"?: string;
        /**
          * Describes the visual variant for the banner.
         */
        "variant": 'info' | 'danger' | 'caution';
    }
    interface OdsButton {
        /**
          * Disables the button
         */
        "disabled": boolean;
        /**
          * Describes the visual variant for the button.
         */
        "variant": 'primary' | 'secondary' | 'danger' | 'overlay' | 'clear' | 'dismiss';
    }
    interface OdsCheckbox {
        /**
          * Indicates whether the checkbox is checked by default
         */
        "checked"?: boolean;
        /**
          * Disables the input control
         */
        "disabled"?: boolean;
        "element": HTMLInputElement;
        /**
          * Indicates that the input elements checked value is neither true nor false.
         */
        "indeterminate"?: boolean;
        /**
          * Specifies the the validity of the element value.
         */
        "invalid": boolean;
        /**
          * Assigns a name to the input control.
         */
        "name": string;
        /**
          * Specifies that an input field must be filled out before submitting the form
         */
        "required"?: boolean;
        /**
          * Specifies the intial value for the control.
         */
        "value": string;
    }
    interface OdsIcon {
        /**
          * Describes the visual variant for the icon.
         */
        "type": 'caution'
  | 'close'
  | 'complete'
  | 'copy'
  | 'delete'
  | 'download'
  | 'edit'
  | 'error'
  | 'filter'
  | 'get-info'
  | 'go-backward'
  | 'go-forward'
  | 'minus'
  | 'notification'
  | 'plus'
  | 'search'
  | 'settings'
  | 'user';
    }
    interface OdsInfobox {
        /**
          * The human-readable content displayed along side the headline within the infobox.
         */
        "content": string;
        /**
          * The title of the infobox.
         */
        "headline"?: string;
        /**
          * Describes the visual variant for the infobox.
         */
        "variant": 'info' | 'danger' | 'caution' | 'success';
    }
    interface OdsInputText {
        /**
          * Specifies for enabling or disabling of autocomplete in <input> element
         */
        "autocomplete"?: 'on' | 'off';
        /**
          * Disables the input control
         */
        "disabled"?: boolean;
        /**
          * Specifies the the validity of the element value.
         */
        "invalid": boolean;
        /**
          * Assigns a name to the input control.
         */
        "label": string;
        /**
          * Specifies the maximum permissible value, this is used in types date, month, week, time and datetime-local only.
         */
        "max"?: number;
        /**
          * Specifies the maximum amount of characters permissible in the input element.
         */
        "maxlength"?: number;
        /**
          * Specifies the minimum permissible value, this is used in types date, month, week, time and datetime-local only.
         */
        "min"?: string;
        /**
          * Specifies the minimum amount of characters permissible in the input element.
         */
        "minlength"?: number;
        /**
          * Assigns a name to the input control.
         */
        "name": string;
        /**
          * Specifies a short hint that describes the expected value.
         */
        "placeholder"?: string;
        /**
          * Sets the input control value to read-only. This prevents the user from changing the value, however unlike disabled the element can continue to recieve focus.
         */
        "readonly"?: string;
        /**
          * Specifies that an input field must be filled out before submitting the form
         */
        "required"?: boolean;
        /**
          * Specifies the type of control.
         */
        "type": 'text'
  | 'button'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
        /**
          * Specifies the intial value for the control.
         */
        "value": string;
    }
    interface OdsLink {
        /**
          * Whether to download the resource instead of navigating to it, and its filename if so
         */
        "download"?: string;
        /**
          * The address of the hyperlink
         */
        "href": string;
        /**
          * Human language of the linked resource
         */
        "hreflang"?: string;
        /**
          * URLs to ping
         */
        "ping"?: string;
        /**
          * Referrer policy for fetches initiated by the element
         */
        "referrerpolicy"?: string;
        /**
          * Relationship between the location in the document containing the hyperlink and the destination resource
         */
        "rel"?: string;
        /**
          * Defines the context in which the ods-link will be used.
         */
        "role"?: 'role'
  | 'button'
  | 'checkbox'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'option'
  | 'radio'
  | 'switch'
  | 'tab'
  | 'treeitem';
        /**
          * Browsing context for the hyperlink navigation
         */
        "target"?: '_self' | '_blank' | '_parent' | '_top';
        /**
          * Hint for the type of the referenced resource
         */
        "type"?: string;
    }
    interface OdsModal {
        /**
          * Determines the display of the modal.
         */
        "active": boolean;
    }
    interface OdsRadioButton {
        /**
          * Indicates whether the checkbox is checked by default
         */
        "checked"?: boolean;
        /**
          * Disables the input control
         */
        "disabled"?: boolean;
        "element": HTMLInputElement;
        /**
          * Indicates that the input elements checked value is neither true nor false.
         */
        "indeterminate"?: boolean;
        /**
          * Specifies the the validity of the element value.
         */
        "invalid": boolean;
        /**
          * Assigns a name to the input control.
         */
        "name": string;
        /**
          * Specifies that an input field must be filled out before submitting the form
         */
        "required"?: boolean;
        /**
          * Specifies the intial value for the control.
         */
        "value": string;
    }
    interface OdsRadioGroup {
    }
    interface OdsStatus {
        /**
          * A descriptor which appears above the visual status indicator.
         */
        "label"?: string;
        /**
          * Visually hides the label.
         */
        "labelHidden": boolean;
        /**
          * Describes the visual variant (color) used for the status indicator.
         */
        "role": 'alert' | 'log' | 'marquee' | 'status' | 'timer';
        /**
          * The human-readable displayed aloing side the visual status indicator.
         */
        "value": string;
        /**
          * Describes the visual variant for the Status.
         */
        "variant": 'neutral' | 'success' | 'caution' | 'danger';
    }
    interface OdsTabpanel {
        /**
          * A label which describes the contents of the modal to assistive devices.
         */
        "hidden": boolean;
    }
    interface OdsTabs {
        /**
          * A label which describes the contents of the modal to assistive devices.
         */
        "ariaLabel": string;
        /**
          * A label which describes the contents of the modal to assistive devices.
         */
        "initialTabpanelIndex": number;
    }
    interface OdsTag {
    }
    interface OdsTagList {
    }
    interface OdsTitle {
        /**
          * Specifies for enabling or disabling of autocomplete in <input> element
         */
        "level"?: '1' | '2' | '3' | '4' | '5' | '6';
        /**
          * Specifies for enabling or disabling of autocomplete in <input> element
         */
        "visualLevel"?: '1' | '2' | '3' | '4' | '5' | '6';
    }
    interface OdsToast {
        /**
          * Displays the banner
         */
        "active"?: boolean;
        /**
          * Body text displayed beaneath the toast title
         */
        "body": string;
        /**
          * Title message displayed on the toast
         */
        "heading"?: string;
        /**
          * Describes the visual variant the toast banner.
         */
        "variant": 'info' | 'success' | 'caution' | 'danger';
    }
    interface OdsToastPen {
        "addToast": (toast: any) => Promise<void>;
    }
    interface OdsTooltip {
        /**
          * Describes the human-readble text diplayed within the tooltip.
         */
        "label": string;
        /**
          * Describes the position of the tooltip relative to the content in the slot.
         */
        "position": 'top' | 'right' | 'bottom' | 'left';
    }
}
declare global {
    interface HTMLOdsBannerElement extends Components.OdsBanner, HTMLStencilElement {
    }
    var HTMLOdsBannerElement: {
        prototype: HTMLOdsBannerElement;
        new (): HTMLOdsBannerElement;
    };
    interface HTMLOdsButtonElement extends Components.OdsButton, HTMLStencilElement {
    }
    var HTMLOdsButtonElement: {
        prototype: HTMLOdsButtonElement;
        new (): HTMLOdsButtonElement;
    };
    interface HTMLOdsCheckboxElement extends Components.OdsCheckbox, HTMLStencilElement {
    }
    var HTMLOdsCheckboxElement: {
        prototype: HTMLOdsCheckboxElement;
        new (): HTMLOdsCheckboxElement;
    };
    interface HTMLOdsIconElement extends Components.OdsIcon, HTMLStencilElement {
    }
    var HTMLOdsIconElement: {
        prototype: HTMLOdsIconElement;
        new (): HTMLOdsIconElement;
    };
    interface HTMLOdsInfoboxElement extends Components.OdsInfobox, HTMLStencilElement {
    }
    var HTMLOdsInfoboxElement: {
        prototype: HTMLOdsInfoboxElement;
        new (): HTMLOdsInfoboxElement;
    };
    interface HTMLOdsInputTextElement extends Components.OdsInputText, HTMLStencilElement {
    }
    var HTMLOdsInputTextElement: {
        prototype: HTMLOdsInputTextElement;
        new (): HTMLOdsInputTextElement;
    };
    interface HTMLOdsLinkElement extends Components.OdsLink, HTMLStencilElement {
    }
    var HTMLOdsLinkElement: {
        prototype: HTMLOdsLinkElement;
        new (): HTMLOdsLinkElement;
    };
    interface HTMLOdsModalElement extends Components.OdsModal, HTMLStencilElement {
    }
    var HTMLOdsModalElement: {
        prototype: HTMLOdsModalElement;
        new (): HTMLOdsModalElement;
    };
    interface HTMLOdsRadioButtonElement extends Components.OdsRadioButton, HTMLStencilElement {
    }
    var HTMLOdsRadioButtonElement: {
        prototype: HTMLOdsRadioButtonElement;
        new (): HTMLOdsRadioButtonElement;
    };
    interface HTMLOdsRadioGroupElement extends Components.OdsRadioGroup, HTMLStencilElement {
    }
    var HTMLOdsRadioGroupElement: {
        prototype: HTMLOdsRadioGroupElement;
        new (): HTMLOdsRadioGroupElement;
    };
    interface HTMLOdsStatusElement extends Components.OdsStatus, HTMLStencilElement {
    }
    var HTMLOdsStatusElement: {
        prototype: HTMLOdsStatusElement;
        new (): HTMLOdsStatusElement;
    };
    interface HTMLOdsTabpanelElement extends Components.OdsTabpanel, HTMLStencilElement {
    }
    var HTMLOdsTabpanelElement: {
        prototype: HTMLOdsTabpanelElement;
        new (): HTMLOdsTabpanelElement;
    };
    interface HTMLOdsTabsElement extends Components.OdsTabs, HTMLStencilElement {
    }
    var HTMLOdsTabsElement: {
        prototype: HTMLOdsTabsElement;
        new (): HTMLOdsTabsElement;
    };
    interface HTMLOdsTagElement extends Components.OdsTag, HTMLStencilElement {
    }
    var HTMLOdsTagElement: {
        prototype: HTMLOdsTagElement;
        new (): HTMLOdsTagElement;
    };
    interface HTMLOdsTagListElement extends Components.OdsTagList, HTMLStencilElement {
    }
    var HTMLOdsTagListElement: {
        prototype: HTMLOdsTagListElement;
        new (): HTMLOdsTagListElement;
    };
    interface HTMLOdsTitleElement extends Components.OdsTitle, HTMLStencilElement {
    }
    var HTMLOdsTitleElement: {
        prototype: HTMLOdsTitleElement;
        new (): HTMLOdsTitleElement;
    };
    interface HTMLOdsToastElement extends Components.OdsToast, HTMLStencilElement {
    }
    var HTMLOdsToastElement: {
        prototype: HTMLOdsToastElement;
        new (): HTMLOdsToastElement;
    };
    interface HTMLOdsToastPenElement extends Components.OdsToastPen, HTMLStencilElement {
    }
    var HTMLOdsToastPenElement: {
        prototype: HTMLOdsToastPenElement;
        new (): HTMLOdsToastPenElement;
    };
    interface HTMLOdsTooltipElement extends Components.OdsTooltip, HTMLStencilElement {
    }
    var HTMLOdsTooltipElement: {
        prototype: HTMLOdsTooltipElement;
        new (): HTMLOdsTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ods-banner": HTMLOdsBannerElement;
        "ods-button": HTMLOdsButtonElement;
        "ods-checkbox": HTMLOdsCheckboxElement;
        "ods-icon": HTMLOdsIconElement;
        "ods-infobox": HTMLOdsInfoboxElement;
        "ods-input-text": HTMLOdsInputTextElement;
        "ods-link": HTMLOdsLinkElement;
        "ods-modal": HTMLOdsModalElement;
        "ods-radio-button": HTMLOdsRadioButtonElement;
        "ods-radio-group": HTMLOdsRadioGroupElement;
        "ods-status": HTMLOdsStatusElement;
        "ods-tabpanel": HTMLOdsTabpanelElement;
        "ods-tabs": HTMLOdsTabsElement;
        "ods-tag": HTMLOdsTagElement;
        "ods-tag-list": HTMLOdsTagListElement;
        "ods-title": HTMLOdsTitleElement;
        "ods-toast": HTMLOdsToastElement;
        "ods-toast-pen": HTMLOdsToastPenElement;
        "ods-tooltip": HTMLOdsTooltipElement;
    }
}
declare namespace LocalJSX {
    interface OdsBanner {
        /**
          * Displays the banner
         */
        "active"?: boolean;
        /**
          * The human-readable content displayed along side the headline within the banner.
         */
        "content"?: string;
        /**
          * Displays a dismiss button for the banner
         */
        "dismissable"?: boolean;
        /**
          * The title of the banner.
         */
        "headline"?: string;
        /**
          * Event: Fired when the ods-banner is dismissed by the user.
         */
        "onDismissed"?: (event: CustomEvent<boolean>) => void;
        /**
          * Describes the visual variant for the banner.
         */
        "variant"?: 'info' | 'danger' | 'caution';
    }
    interface OdsButton {
        /**
          * Disables the button
         */
        "disabled"?: boolean;
        /**
          * Describes the visual variant for the button.
         */
        "variant"?: 'primary' | 'secondary' | 'danger' | 'overlay' | 'clear' | 'dismiss';
    }
    interface OdsCheckbox {
        /**
          * Indicates whether the checkbox is checked by default
         */
        "checked"?: boolean;
        /**
          * Disables the input control
         */
        "disabled"?: boolean;
        "element"?: HTMLInputElement;
        /**
          * Indicates that the input elements checked value is neither true nor false.
         */
        "indeterminate"?: boolean;
        /**
          * Specifies the the validity of the element value.
         */
        "invalid"?: boolean;
        /**
          * Assigns a name to the input control.
         */
        "name"?: string;
        "onOds-input"?: (event: CustomEvent<any>) => void;
        /**
          * Specifies that an input field must be filled out before submitting the form
         */
        "required"?: boolean;
        /**
          * Specifies the intial value for the control.
         */
        "value"?: string;
    }
    interface OdsIcon {
        /**
          * Describes the visual variant for the icon.
         */
        "type"?: 'caution'
  | 'close'
  | 'complete'
  | 'copy'
  | 'delete'
  | 'download'
  | 'edit'
  | 'error'
  | 'filter'
  | 'get-info'
  | 'go-backward'
  | 'go-forward'
  | 'minus'
  | 'notification'
  | 'plus'
  | 'search'
  | 'settings'
  | 'user';
    }
    interface OdsInfobox {
        /**
          * The human-readable content displayed along side the headline within the infobox.
         */
        "content"?: string;
        /**
          * The title of the infobox.
         */
        "headline"?: string;
        /**
          * Describes the visual variant for the infobox.
         */
        "variant"?: 'info' | 'danger' | 'caution' | 'success';
    }
    interface OdsInputText {
        /**
          * Specifies for enabling or disabling of autocomplete in <input> element
         */
        "autocomplete"?: 'on' | 'off';
        /**
          * Disables the input control
         */
        "disabled"?: boolean;
        /**
          * Specifies the the validity of the element value.
         */
        "invalid"?: boolean;
        /**
          * Assigns a name to the input control.
         */
        "label"?: string;
        /**
          * Specifies the maximum permissible value, this is used in types date, month, week, time and datetime-local only.
         */
        "max"?: number;
        /**
          * Specifies the maximum amount of characters permissible in the input element.
         */
        "maxlength"?: number;
        /**
          * Specifies the minimum permissible value, this is used in types date, month, week, time and datetime-local only.
         */
        "min"?: string;
        /**
          * Specifies the minimum amount of characters permissible in the input element.
         */
        "minlength"?: number;
        /**
          * Assigns a name to the input control.
         */
        "name"?: string;
        "onOds-input"?: (event: CustomEvent<any>) => void;
        /**
          * Specifies a short hint that describes the expected value.
         */
        "placeholder"?: string;
        /**
          * Sets the input control value to read-only. This prevents the user from changing the value, however unlike disabled the element can continue to recieve focus.
         */
        "readonly"?: string;
        /**
          * Specifies that an input field must be filled out before submitting the form
         */
        "required"?: boolean;
        /**
          * Specifies the type of control.
         */
        "type"?: 'text'
  | 'button'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
        /**
          * Specifies the intial value for the control.
         */
        "value"?: string;
    }
    interface OdsLink {
        /**
          * Whether to download the resource instead of navigating to it, and its filename if so
         */
        "download"?: string;
        /**
          * The address of the hyperlink
         */
        "href"?: string;
        /**
          * Human language of the linked resource
         */
        "hreflang"?: string;
        /**
          * URLs to ping
         */
        "ping"?: string;
        /**
          * Referrer policy for fetches initiated by the element
         */
        "referrerpolicy"?: string;
        /**
          * Relationship between the location in the document containing the hyperlink and the destination resource
         */
        "rel"?: string;
        /**
          * Defines the context in which the ods-link will be used.
         */
        "role"?: 'role'
  | 'button'
  | 'checkbox'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'option'
  | 'radio'
  | 'switch'
  | 'tab'
  | 'treeitem';
        /**
          * Browsing context for the hyperlink navigation
         */
        "target"?: '_self' | '_blank' | '_parent' | '_top';
        /**
          * Hint for the type of the referenced resource
         */
        "type"?: string;
    }
    interface OdsModal {
        /**
          * Determines the display of the modal.
         */
        "active"?: boolean;
    }
    interface OdsRadioButton {
        /**
          * Indicates whether the checkbox is checked by default
         */
        "checked"?: boolean;
        /**
          * Disables the input control
         */
        "disabled"?: boolean;
        "element"?: HTMLInputElement;
        /**
          * Indicates that the input elements checked value is neither true nor false.
         */
        "indeterminate"?: boolean;
        /**
          * Specifies the the validity of the element value.
         */
        "invalid"?: boolean;
        /**
          * Assigns a name to the input control.
         */
        "name"?: string;
        "onOds-input"?: (event: CustomEvent<any>) => void;
        /**
          * Specifies that an input field must be filled out before submitting the form
         */
        "required"?: boolean;
        /**
          * Specifies the intial value for the control.
         */
        "value"?: string;
    }
    interface OdsRadioGroup {
    }
    interface OdsStatus {
        /**
          * A descriptor which appears above the visual status indicator.
         */
        "label"?: string;
        /**
          * Visually hides the label.
         */
        "labelHidden"?: boolean;
        /**
          * Describes the visual variant (color) used for the status indicator.
         */
        "role"?: 'alert' | 'log' | 'marquee' | 'status' | 'timer';
        /**
          * The human-readable displayed aloing side the visual status indicator.
         */
        "value"?: string;
        /**
          * Describes the visual variant for the Status.
         */
        "variant"?: 'neutral' | 'success' | 'caution' | 'danger';
    }
    interface OdsTabpanel {
        /**
          * A label which describes the contents of the modal to assistive devices.
         */
        "hidden"?: boolean;
    }
    interface OdsTabs {
        /**
          * A label which describes the contents of the modal to assistive devices.
         */
        "ariaLabel"?: string;
        /**
          * A label which describes the contents of the modal to assistive devices.
         */
        "initialTabpanelIndex"?: number;
    }
    interface OdsTag {
    }
    interface OdsTagList {
    }
    interface OdsTitle {
        /**
          * Specifies for enabling or disabling of autocomplete in <input> element
         */
        "level"?: '1' | '2' | '3' | '4' | '5' | '6';
        /**
          * Specifies for enabling or disabling of autocomplete in <input> element
         */
        "visualLevel"?: '1' | '2' | '3' | '4' | '5' | '6';
    }
    interface OdsToast {
        /**
          * Displays the banner
         */
        "active"?: boolean;
        /**
          * Body text displayed beaneath the toast title
         */
        "body"?: string;
        /**
          * Title message displayed on the toast
         */
        "heading"?: string;
        /**
          * Event: Fired when the ods-toast is dismissed.
         */
        "onDismissed"?: (event: CustomEvent<boolean>) => void;
        /**
          * Describes the visual variant the toast banner.
         */
        "variant"?: 'info' | 'success' | 'caution' | 'danger';
    }
    interface OdsToastPen {
    }
    interface OdsTooltip {
        /**
          * Describes the human-readble text diplayed within the tooltip.
         */
        "label"?: string;
        /**
          * Describes the position of the tooltip relative to the content in the slot.
         */
        "position"?: 'top' | 'right' | 'bottom' | 'left';
    }
    interface IntrinsicElements {
        "ods-banner": OdsBanner;
        "ods-button": OdsButton;
        "ods-checkbox": OdsCheckbox;
        "ods-icon": OdsIcon;
        "ods-infobox": OdsInfobox;
        "ods-input-text": OdsInputText;
        "ods-link": OdsLink;
        "ods-modal": OdsModal;
        "ods-radio-button": OdsRadioButton;
        "ods-radio-group": OdsRadioGroup;
        "ods-status": OdsStatus;
        "ods-tabpanel": OdsTabpanel;
        "ods-tabs": OdsTabs;
        "ods-tag": OdsTag;
        "ods-tag-list": OdsTagList;
        "ods-title": OdsTitle;
        "ods-toast": OdsToast;
        "ods-toast-pen": OdsToastPen;
        "ods-tooltip": OdsTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ods-banner": LocalJSX.OdsBanner & JSXBase.HTMLAttributes<HTMLOdsBannerElement>;
            "ods-button": LocalJSX.OdsButton & JSXBase.HTMLAttributes<HTMLOdsButtonElement>;
            "ods-checkbox": LocalJSX.OdsCheckbox & JSXBase.HTMLAttributes<HTMLOdsCheckboxElement>;
            "ods-icon": LocalJSX.OdsIcon & JSXBase.HTMLAttributes<HTMLOdsIconElement>;
            "ods-infobox": LocalJSX.OdsInfobox & JSXBase.HTMLAttributes<HTMLOdsInfoboxElement>;
            "ods-input-text": LocalJSX.OdsInputText & JSXBase.HTMLAttributes<HTMLOdsInputTextElement>;
            "ods-link": LocalJSX.OdsLink & JSXBase.HTMLAttributes<HTMLOdsLinkElement>;
            "ods-modal": LocalJSX.OdsModal & JSXBase.HTMLAttributes<HTMLOdsModalElement>;
            "ods-radio-button": LocalJSX.OdsRadioButton & JSXBase.HTMLAttributes<HTMLOdsRadioButtonElement>;
            "ods-radio-group": LocalJSX.OdsRadioGroup & JSXBase.HTMLAttributes<HTMLOdsRadioGroupElement>;
            "ods-status": LocalJSX.OdsStatus & JSXBase.HTMLAttributes<HTMLOdsStatusElement>;
            "ods-tabpanel": LocalJSX.OdsTabpanel & JSXBase.HTMLAttributes<HTMLOdsTabpanelElement>;
            "ods-tabs": LocalJSX.OdsTabs & JSXBase.HTMLAttributes<HTMLOdsTabsElement>;
            "ods-tag": LocalJSX.OdsTag & JSXBase.HTMLAttributes<HTMLOdsTagElement>;
            "ods-tag-list": LocalJSX.OdsTagList & JSXBase.HTMLAttributes<HTMLOdsTagListElement>;
            "ods-title": LocalJSX.OdsTitle & JSXBase.HTMLAttributes<HTMLOdsTitleElement>;
            "ods-toast": LocalJSX.OdsToast & JSXBase.HTMLAttributes<HTMLOdsToastElement>;
            "ods-toast-pen": LocalJSX.OdsToastPen & JSXBase.HTMLAttributes<HTMLOdsToastPenElement>;
            "ods-tooltip": LocalJSX.OdsTooltip & JSXBase.HTMLAttributes<HTMLOdsTooltipElement>;
        }
    }
}
