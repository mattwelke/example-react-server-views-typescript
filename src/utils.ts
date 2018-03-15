import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

export function renderReactView(el: React.ReactElement<any>): string {
    return `<!doctype html>${ReactDOMServer.renderToStaticMarkup(el)}`;
}