import React from 'react';
import { connect } from 'react-redux';
import {Button, Container, TextField} from '@material-ui/core';
import useStyles from './style';
import { AddNewsModal } from '../modal';
import {filter, resetFilter} from '../../actions'


const AdminActions = ({resetFilter, filter}) => {
    const classes = useStyles();
    return(
        <Container style={{marginTop: '100px'}}>
            <div className={classes.buttons}>
                <AddNewsModal/>
                <Button color="secondary" variant="contained" onClick={() => filter('comments')}>Top by comments</Button>
                <Button color="secondary" variant="contained" onClick={() => filter('views')}>Top by views</Button>
                <Button color="secondary" variant="contained" onClick={() => resetFilter()}>Reset filter</Button>
            </div>
            <div className={classes.fields}>
            <TextField label='Filter by user Id' color="secondary" className={classes.filter}   onChange={(e) => filter('userId', e.target.value)}/>
            <TextField label='Filter by recent news' color="secondary" className={classes.filter}  onChange={(e) => filter('resent', e.target.value)}/>
            </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (type, value) => dispatch(filter(type, value)), 
        resetFilter: () => dispatch(resetFilter()),
    }
  }
  
  export default connect(null, mapDispatchToProps)(AdminActions);