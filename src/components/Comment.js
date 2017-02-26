import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux'

class Comment extends Component {

    render() {
        const {text, user} = this.props.comment;
        return (
            <div>
                {text}
                {user && <b> by {user}</b>}
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default connect((state, props) => {
    const {id} = props
    const comment = state.comments.entities.get(id)
    return { comment }
})(Comment)