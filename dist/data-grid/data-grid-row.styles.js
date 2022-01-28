// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { css } from '@microsoft/fast-element';
import { designUnit, listHoverBackground, quickInputBackground, } from '../design-tokens';
export const dataGridRowStyles = (context, definition) => css `
	:host {
		display: grid;
		padding: calc((${designUnit} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${quickInputBackground};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${listHoverBackground};
	}
`;
