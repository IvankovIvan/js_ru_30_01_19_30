import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false
    }
/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
    }
*/

    render() {
        const {article} = this.props
        let commentList = null;
        if (article.comments)
            commentList = article.comments;
        console.log('---', 123)
        return (
            <div>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {this.getBody(commentList)}

            </div>
        )
    }

    getBody(commentList) {
        if (!this.state.isOpen) return null

        return (
            <section>
                {this.props.article.text}
                <CommentList commentList={commentList}/>
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}