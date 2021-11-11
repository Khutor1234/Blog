import React from 'react';
import { connect } from 'react-redux';
import { onDeleteItem, onChangeItem } from '../../actions';
import {Button} from '@material-ui/core';
import useStyles from './style';
import { NewsChanges } from '../modal';

const NewsActions = ({news, onDelete, onChangeItem}) => {
    const classes = useStyles();
    return(
        <div className={classes.buttons}>
            <Button color="secondary" variant="outlined" className={classes.button} onClick={() => onChangeItem(news)}>Edit</Button>
            {/* <NewsChanges/> */}
            <Button color="secondary" variant="outlined" className={classes.button} onClick={() => onDelete(news.id)}>Delete</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      onDelete: (id) => dispatch(onDeleteItem(id)), 
      onChangeItem: (news) => dispatch(onChangeItem(news))
    }
  }
  
  export default connect(null, mapDispatchToProps)(NewsActions);