import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {loadComments} from '../AC'
import Comment from './Comment'

class CommentPage extends Component {
    componentDidMount() {
        this.props.loadComments(this.props.page);
    }

    render() {

        if (!this.props.commentPage)
            return null
        const {comments} = this.props.commentPage;
        return (
            <div>{this.getBody()}</div>
        );
    }

    getBody() {
        const {comments} = this.props.commentPage;

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <div>
            <ul>{commentItems}</ul>
        </div>
    }
}

CommentPage.propTypes = {};
CommentPage.defaultProps = {};

export default connect((state, props) => {
    const pageId = props.page;
    const commentPage = state.commentsPage.entities.get(pageId);
    console.log(';;;;;;;; commentPage ', commentPage, pageId);
    return { commentPage }
}, {loadComments}) (CommentPage);