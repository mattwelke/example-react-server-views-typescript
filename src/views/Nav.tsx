import * as React from 'react';

interface Props {
    activeRoute: string;
}

export class Nav extends React.Component<Props> {
    render() {
        const msg = ' <- You are here! :)';

        return <ul>
            <li><a href="/">Home</a>{this.props.activeRoute === '/' ? msg : ''}</li>
            <li><a href="/about">About</a>{this.props.activeRoute === '/about' ? msg : ''}</li>
        </ul>;
    }
};
