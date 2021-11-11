import React from 'react';
import {ListItem, ListItemText, Typography, ListItemAvatar, Avatar} from '@material-ui/core';
import useStyles from './style';
import NewsActions from '../news-actions';
import { withRouter } from 'react-router-dom';

const NewsListItem = ({news, admin, history}) => {
  const classes = useStyles();
  const {title, body, id} = news;

  return (
      <ListItem>
        <ListItemAvatar onClick = {() => history.push('/' + id)}>
            <Avatar className={classes.avatar} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2z1rdNWafwr29UyOrydlSPg4Et4RR4-z5iA&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText>
          <Typography className={classes.header} component="h2">{title}</Typography>
          <Typography component="span">{body}</Typography>
            {admin ? <NewsActions news = {news}/> : null}
        </ListItemText>
      </ListItem>
  );
};

export default withRouter(NewsListItem);

