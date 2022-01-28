import { CSSDesignToken } from '@microsoft/fast-foundation';
import type { T } from '../design-tokens/create';
/**
 * Configures a MutationObserver to watch for Visual Studio Code theme changes and
 * applies the current Visual Studio Code theme to the toolkit components.
 */
export declare function initThemeChangeListener(tokenMappings: {
    [index: string]: CSSDesignToken<T>;
}): void;
