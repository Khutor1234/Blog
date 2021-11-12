import React from 'react';
import { connect } from 'react-redux';
import { onDeleteItem  } from '../../actions';
import {Button} from '@material-ui/core';
import useStyles from './style';
import NewsChanges from '../modal/news-changes';

const NewsActions = ({news, onDelete}) => {
    const classes = useStyles();
    return(
        <div className={classes.buttons}>
            <NewsChanges news = {news}/>
            <Button color="secondary" variant="outlined" onClick={() => onDelete(news.id)}>Delete</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      onDelete: (id) => dispatch(onDeleteItem(id)), 
    }
  }
  
  export default connect(null, mapDispatchToProps)(NewsActions);