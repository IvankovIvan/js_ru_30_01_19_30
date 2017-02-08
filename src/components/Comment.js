import React, {Component, PropTypes} from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const {text, user} = this.props.comment
        return (
            <div>
                {text}
                {user && <b> by {user}</b>}
            </div>
        )
    }
}


export default Comment