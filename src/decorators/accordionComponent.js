import React from 'react'

export default (Component) => class extends React.Component {
    state = {
        openArticleId: null
    };

    toggleOpen = ArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault();
        if (this.state.openArticleId == ArticleId)
            ArticleId = null;
        this.setState({
            openArticleId: ArticleId
        })
    };

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }


}