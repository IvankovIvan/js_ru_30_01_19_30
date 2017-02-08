import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'
//import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(PropTypes.shape({
                comment: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    text: PropTypes.string.isRequired,
                    user: PropTypes.string.isRequired
                })
            }))
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    render() {
        const {article, toggleOpen} = this.props;
        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {isOpen, article: {text, comments}} = this.props;
        if (!isOpen) return null

        return (
            <section>
                {text}
                <CommentList comments={comments}/>
            </section>
        )
    }
}

export default Article