import React, { useEffect } from 'react';
import NewsListItem from '../news-list-item';
import { connect } from 'react-redux';
import {List, Container} from '@material-ui/core';
import { fetchNews} from '../../actions';
import { withService, compose } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const NewsList = ({news, admin}) => {

  return(
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
  )
}

const NewsListContainer= ({news, loading, error, fetchNews, admin, filteredNews}) => {

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

  if(filteredNews){
    return <NewsList admin={admin} news={filteredNews}/>
  }

  return (
    <NewsList admin={admin} news={news}/>
  );
};

const mapStateToProps = ({newsList: {filteredNews, news, loading, error}}) => {
  return{
    news,
    loading,
    error,
    filteredNews
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
)(NewsListContainer);
