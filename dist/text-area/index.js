// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TextArea as FoundationTextArea, textAreaTemplate as template, TextAreaResize, } from '@microsoft/fast-foundation';
import { textAreaStyles as styles } from './text-area.styles';
export { TextAreaResize };
/**
 * The Visual Studio Code text area class.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * @public
 */
export class TextArea extends FoundationTextArea {
    /**
     * Component lifecycle method that runs when the component is inserted
     * into the DOM.
     *
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (this.textContent) {
            this.setAttribute('aria-label', this.textContent);
        }
        else {
            // Describe the generic component if no label is provided
            this.setAttribute('aria-label', 'Text area');
        }
    }
}
/**
 * The Visual Studio Code text area component registration.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * @public
 */
export const vsCodeTextArea = TextArea.compose({
    baseName: 'text-area',
    template,
    styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});
