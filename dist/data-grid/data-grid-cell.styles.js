// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { css } from '@microsoft/fast-element';
import { focusVisible, } from '@microsoft/fast-foundation';
import { borderWidth, cornerRadius, designUnit, focusBorder, fontFamily, foreground, listActiveSelectionBackground, listActiveSelectionForeground, typeRampBaseFontSize, typeRampBaseLineHeight, } from '../design-tokens';
export const dataGridCellStyles = (context, definition) => css `
	:host {
		padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
		color: ${foreground};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		font-weight: 400;
		border: solid calc(${borderWidth} * 1px) transparent;
		border-radius: calc(${cornerRadius} * 1px);
		min-width: 96px;
		white-space: wrap;
		overflow-wrap: break-word;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${focusVisible}),
	:host(:focus),
	:host(:active) {
		background: ${listActiveSelectionBackground};
		border: solid calc(${borderWidth} * 1px) ${focusBorder};
		color: ${listActiveSelectionForeground};
		outline: none;
	}
`;
