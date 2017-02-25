import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {loadComment} from '../AC'
import {connect} from 'react-redux'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    state = {
        isOpen: false
    }

    componentWillUpdate(nextProps, nextState) {
        const {id, isLoadingComments, isLoadedComments} = nextProps.article;
        if (!this.state.isOpen && nextState.isOpen && !isLoadingComments
                && !isLoadedComments)
            this.props.loadComment(id);
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {isOpen} = this.state;
        if (!isOpen) return null;

        const {comments = [], id, isLoadedComments} = this.props.article;

console.log("lklklklklkl", comments);
        if (!isLoadedComments)
            return <Loader/>

        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = comments.map(id => <li key={id}><Comment id={id} isOpen={isOpen}/></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id}  />
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect(null, {loadComment}) ( CommentList)