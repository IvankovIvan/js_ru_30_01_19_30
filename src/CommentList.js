import React, {Component} from 'react'
import Comment from './Comment'


export default class CommentList extends Component {

    state  =
        {
            isOpen: false
        };

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const {commentList} = this.props;
        if (commentList == null)
            return(null);
        const commentElement = commentList.map((element) =>
            <li key={element.id}>
                <Comment comment={element}/>
            </li>
        );
        return (
            <div>
                <h4 onClick={this.handleClick}>{this.getLabelText()}</h4>
                {this.getBody(commentElement)}

            </div>
        );
    }

    getBody(commentElement) {
        if (!this.state.isOpen)
        {
            return null;
        } else
        {
            return (
                <ul>
                    {commentElement}
                </ul>
            );
        }
    }

    getLabelText(){
        if (this.state.isOpen) {
            return 'Hide Comment'
        }
        return 'Show Comment'
    }

    handleClick = (ev)  => {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
}