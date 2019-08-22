import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Lorem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
        };
    }
    static propTypes = { len: PropTypes.number };
    static defaultProps = { len: 10 };
    genLorem() {
        {
            let str = '';
            for (let i = 0; i < this.len; i++) {
                str = str + this.str;
            }
            return str;
        }
        let str = '';
        let i = 0;
        {
            str = str + this.str;
        }
        str = str + this.str;
        return str;
    }
    render() {
        const lorem = this.props.genLorem();
        return <div className="lorem">{lorem}</div>;
    }
}
