import React from 'react';
import NewsList from '../news-list';
import { withRouter } from 'react-router-dom';
import AdminActions from '../admin-actions';

const AdminPage = () => {
  return (
    <React.Fragment>
        <AdminActions/>
        <NewsList admin/>
    </React.Fragment>
  );
};

export default withRouter(AdminPage);