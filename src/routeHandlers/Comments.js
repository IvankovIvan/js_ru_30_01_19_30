import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'
import CommentPage from '../components/CommentPage'

class Comments extends Component {

    /*componentDidMount() {
        if (!this.props.params.page) {
            browserHistory.replace('/comments/1')
        }
    }*/

    /*componentWillUpdate(nextProps, nextState)
    {
        if (!nextProps.params.page) {
            browserHistory.replace('/comments/1')
        }
    }*/

    render() {

        let id = this.props.params.page;
        if (!id)
            id = 1;

        return <CommentPage page={id} key={id}/>
    }
}

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;