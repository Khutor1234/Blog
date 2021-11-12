import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNewsById} from '../../actions';
import { withService, compose } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import NewsListItem from '../news-list-item';
import {ListItem, ListItemText, Typography, ListItemAvatar, Avatar, List, Container} from '@material-ui/core';
import useStyles from './style';


const NewsDetails = ({itemId, comments, newsById, loading, error, fetchNewsById}) => {

  const classes = useStyles();

  useEffect(() => {
    fetchNewsById(itemId)
  }, [fetchNewsById, itemId]);

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

  if(newsById && comments){
    return( 
      <Container style={{marginTop: '100px'}}>
        <NewsListItem news = {newsById} />
        <List style={{marginTop: '50px'}}>
          {
            comments.map((item) => {
              return (
                <ListItem key = {item.id}>
                  <ListItemAvatar>
                      <Avatar className={classes.img} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymjxHoVB2hlH41ioYDjkzOd7oVPhJu-uIeQ&usqp=CAU" />           
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography className={classes.email} component="h3">{item.email}</Typography>
                    <Typography className={classes.name} component="h2">{item.name}</Typography>
                    <Typography className={classes.body} component="span">{item.body}</Typography>
                  </ListItemText>
                </ListItem>
              );
            })
          }
        </List>
      </Container>
    )
  }

  return null

};

const mapStateToProps = ({newsList: { comments, newsById, loading, error}}) => {
  return{
    newsById,
    loading,
    error,
    comments
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  const {service} = ownProps;

  return {
    fetchNewsById: (id) => fetchNewsById(service, dispatch)(id)
  }
}

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(NewsDetails);
