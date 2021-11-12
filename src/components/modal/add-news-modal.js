import {Modal, Button, TextField, TextareaAutosize} from '@material-ui/core';
import { useState } from 'react';
import useStyles from './style';
import { connect } from 'react-redux';
import {newTitleChange, newBodyChange, onAddNewItem} from '../../actions'

const AddNewsModal= ({newTitleChange, newBodyChange, newItem, onAddNewItem}) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	function closeModal() {
		setOpen(false)
		onAddNewItem(newItem)
	  }
	

	return (
		<div>
			<Button color="secondary" variant="contained"  onClick={() => setOpen(true)}>Add news</Button>
				<Modal
					open={open}
					onClose={() => setOpen(false)} >
				<div className={classes.paper}>
					<TextField label='Title' color="secondary" className={classes.title}  onChange={e => newTitleChange(e)}/>
					<TextareaAutosize placeholder='Body' minRows={5} className={classes.body} onChange={e => newBodyChange(e)}/>
					<Button color="secondary" variant="contained" className={classes.buttonSubmit} onClick ={closeModal} >Edit</Button>
				</div>
			</Modal>
		</div>
	);
}

const mapStateToProps = ({newsList: {newItem}}) => {
	return{
		newItem
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
		newTitleChange: (e) => dispatch(newTitleChange(e.target.value)),
		newBodyChange: (e) => dispatch(newBodyChange(e.target.value)),
		onAddNewItem: (newItem) => dispatch(onAddNewItem(newItem))
	}
  }
  
  
  export default connect(mapStateToProps , mapDispatchToProps)(AddNewsModal);