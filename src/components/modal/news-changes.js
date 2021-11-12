import React from 'react';
import { useState } from 'react';
import {Modal, Button, TextField, TextareaAutosize} from '@material-ui/core';
import useStyles from './style';
import { connect } from 'react-redux';
import {titleChange,  bodyChange, itemChange, saveChange} from '../../actions'

const NewsChanges = ({news, changedItem, itemChange, titleChange,  bodyChange, saveChange}) => {
  const classes = useStyles();
	const [open, setOpen] = useState(false);

	function closeModal() {
    saveChange(changedItem)
    setOpen(false)
	}

  function openModal() {
		setOpen(true)
    itemChange(news)
	}
  const body = changedItem ? 
    <Modal
					open={open}
					onClose={() => setOpen(false)} >
				<div className={classes.paper}>
					<TextField label='Title' color="secondary" value={changedItem.title} className={classes.title}  onChange={e => titleChange(e.target.value)}/>
					<TextField placeholder='Body' value={changedItem.body} className={classes.body} onChange={e => bodyChange(e.target.value)}/>
					<Button color="secondary" variant="contained" className={classes.buttonSubmit} onClick ={closeModal} >Edit</Button>
				</div>
			</Modal>
    :null
	

	return (
		<div>
			<Button color="secondary" variant="outlined" onClick ={openModal}>Edit</Button>
				{body}
		</div>
	);
}

const mapStateToProps = ({newsList: {changedItem}}) => {
	return{
		changedItem
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      itemChange: (news) => dispatch(itemChange(news)),
      titleChange: (text) => dispatch(titleChange(text)),
      bodyChange: (text) => dispatch(bodyChange(text)),
      saveChange: (item) => dispatch(saveChange(item)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(NewsChanges);