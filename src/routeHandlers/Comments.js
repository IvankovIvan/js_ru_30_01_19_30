import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'
import CommentPage from '../components/CommentPage'

class Comments extends Component {

    componentDidMount() {
        if (!this.props.params.page) {
            browserHistory.replace('/comments/1')
        }
    }

    componentWillUpdate(nextProps, nextState)
    {
        if (!nextProps.params.page) {
            browserHistory.replace('/comments/1')
        }
    }

    render() {
        return <CommentPage page={this.props.params.page} key={this.props.params.page}/>
    }
}

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;