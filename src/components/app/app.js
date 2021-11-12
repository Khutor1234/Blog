import React from 'react';
import Header from '../header';
import {Switch, Route} from 'react-router-dom';
import {NewsPage, AdminPage} from '../pages';
import NewsDetails from '../news-details';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact component={NewsPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <NewsDetails itemId={id} />
                }}/>
      </Switch>
    </React.Fragment>
  );
};

export default App;
