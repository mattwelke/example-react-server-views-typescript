import * as React from 'react';

import HomeDto from '../dtos/HomeDto';

export default class Home extends React.Component<HomeDto> {
    render() {
        return <div style={{ backgroundColor: this.props.backgroundColor }}>
            <p>Hello, World! The date is {this.props.currentDate.toLocaleDateString()}</p>
        </div>;
    }
};
