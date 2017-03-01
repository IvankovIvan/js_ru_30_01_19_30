import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'

class Comments extends Component {

    componentDidMount() {
        console.log(this.props.params.page);
        if (!this.props.params.page) {
            browserHistory.replace('/comments/1')
        }
    }

    render() {
        console.log(this.props.params.page);


        //const {page} = this.props.params.page;
        //if (page) {
          let  text = `<div>Page not</div>`;
        //}
        return (<div>1231231</div>)

    }
}

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;