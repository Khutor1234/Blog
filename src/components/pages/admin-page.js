import React from 'react';
import NewsList from '../news-list';
import { withRouter } from 'react-router-dom';
import {Button} from '@material-ui/core';

const AdminPage = ({ modalOpen }) => {
  return (
    <React.Fragment>
        <NewsList admin/>
        <Button color="secondary" variant="contained" onClick={() => modalOpen()}>Add news</Button>
    </React.Fragment>
  );
};

export default withRouter(AdminPage);