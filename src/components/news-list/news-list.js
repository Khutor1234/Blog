import React, { useEffect } from 'react';
import NewsListItem from '../news-list-item';
import { connect } from 'react-redux';
import {List, Container} from '@material-ui/core';
import { fetchNews} from '../../actions';
import { withService, compose } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const NewsList = ({news, loading, error, fetchNews, admin}) => {

  useEffect(() => {
      fetchNews()
  }, [fetchNews]);

  if(loading){
      return (
          <div style = {{paddingTop: 110}}>
              <Spinner/>
          </div>
      )
  }

  if(error){
      return <ErrorIndicator/>
  }

  return (
    <Container>
      <List style={{marginTop: '60px'}}>
        {
          news.map((item) => {
            return (
                <NewsListItem key={item.id} news={item} admin = {admin}/>
            );
          })
        }
      </List>
    </Container>
  );
};

const mapStateToProps = ({newsList: {news, loading, error}}) => {
  return{
    news,
    loading,
    error
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const {service} = ownProps;

  return {
      fetchNews: fetchNews(service, dispatch)
  }
}

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewsList);
