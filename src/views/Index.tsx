import * as React from 'react';

import IndexDto from '../dtos/IndexDto';

export default class Index extends React.Component<IndexDto> {
    render() {
        return <div style={{ backgroundColor: this.props.backgroundColor }}>
            <p>Hello, World! The date is {this.props.currentDate.toLocaleDateString()}</p>
        </div>;
    }
};
