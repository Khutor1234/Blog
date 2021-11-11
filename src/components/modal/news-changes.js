import React from 'react';
import { useState } from 'react';
import {Modal, Button, TextField, TextareaAutosize} from '@material-ui/core';
import useStyles from './style';
import { connect } from 'react-redux';
import {onTitleChange, onBodyChange, onSaveChange, onChangeItem} from '../../actions'

const NewsChanges = ({changedItem, onTitleChange, onBodyChange, onChangeItem}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    return (
        <React.Fragment>
          <Modal open={open} onClose = {() => setOpen(false)}> 
            <div className={classes.paper}>
              <TextField className={classes.title} onChange={e => onTitleChange(e)}/>
              <TextareaAutosize minRows={5} className={classes.body} onChange={e => onBodyChange(e)}/>
              {/* <Button color="secondary" variant="contained" className={classes.buttonSubmit} onClick ={() => onSaveChange(changedItem)}>Edit</Button> */}
          </div>
          </Modal>
        </React.Fragment>
    );
}

const mapStateToProps = ({newsList: {changedItem}}) => {
  return{
    changedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onChangeItem: (item) => dispatch(onChangeItem(item)),
      onTitleChange: (e) => dispatch(onTitleChange(e.target.value)),
      onBodyChange: (e) => dispatch(onBodyChange(e.target.value)),
      // onSaveChange: (changedItem) => onSaveChange(dispatch)(changedItem),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsChanges);