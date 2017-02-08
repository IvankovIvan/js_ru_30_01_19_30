import React, {Component, PropTypes} from 'react'
import Article from './Article'
import AccordionComponent from '../decorators/accordionComponent'

class ArticleList extends Component {
    static propTypes = {
        //сюда еще и из декоратора данные приходят
        //без фанатизма с описанием)
        articles: PropTypes.arrayOf(PropTypes.shape({
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
            })
        })).isRequired
    };

    render() {
        const {articles, toggleOpen, openArticleId} = this.props;
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openArticleId}
                toggleOpen={toggleOpen(article.id)}/>
        </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticleList.defaultProps = {
    articles: []
};

export default AccordionComponent(ArticleList)
