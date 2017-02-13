import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }
    static defaultProps = {
        comments: []
    }
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false,
        user : '',
        comment : ''
    };

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        //форму стоит вынести в отдельный компонент
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
                <div>
                    User: <input type="text" value={this.state.user} onChange={this.handleInputChange('user')}/>
                    Comment: <input type="text" value={this.state.comment} onChange={this.handleInputChange('comment')}/>
                    <input type="button" name="submit" value="submit" id="" onClick={this.handleClick}/>
                </div>

            </div>
        )
    }

    handleInputChange = (name) => (ev) => {

        //**************
        // эти 2 if можно ли написать аккуратней
        //****************
        /*
        this.setState({
            [name]: ev.target.value
        })
        */
        if (name == 'user')
            this.setState({
                user: ev.target.value
            });
        if (name == 'comment')
            this.setState({
                comment: ev.target.value
            });
    };

    handleClick = ev => {
        console.log(this.state.user, this.state.comment);
        this.setState({
            user: '',
            comment: ''
        })
    };

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList
