import * as React from 'react';

export default class Shell extends React.Component {
    render() {
        return <html>
            <head>
                <title>App</title>
            </head>
            <body>
                {this.props.children}
            </body>
        </html>;
    }
};
