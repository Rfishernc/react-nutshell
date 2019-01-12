import React from 'react';
import './articles.scss';
import smashRequests from '../../helpers/data/smashRequests';
import authRequests from '../../helpers/data/authRequests';
import Article from '../article/article';

class articles extends React.Component {
  state = {
    articlesList: [],
  }

  articlesBuilder = () => {
    const articlesRender = [];
    this.state.articlesList.forEach((article) => {
      articlesRender.push(<Article title={article.title} synopsis={article.synopsis} url={article.url} key={article.title}/>);
    });
    return articlesRender;
  }

  componentDidMount() {
    smashRequests.getArticlesFromMeAndFriends(authRequests.getCurrentUid())
      .then((articlesArray) => {
        this.setState({ articlesList: articlesArray });
      })
      .catch(() => {

      });
  }

  render() {
    return (
      <div>
        <h3 className='articleTitle'>Articles</h3>
        <div className='row ml-1 mr-0'>
          <div className='col-9'>{this.articlesBuilder()}</div>
          <div className='col-3'>
            <h4>Add A New Article</h4>
            <form>
              <div class="form-group">
                <label for="articleName">Article Title</label>
                <input type="text" class="form-control" id="articleName" placeholder="Article Title"/>
              </div>
              <div class="form-group">
                <label for="articleSynopsis">Article Synopsis</label>
                <input type="text" class="form-control" id="articleSynopsis" placeholder="Synopsis"/>
              </div>
              <div class="form-group">
                <label for="articleUrl">Article URL</label>
                <input type="text" class="form-control" id="articleUrl" placeholder="URL"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default articles;
