import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';
import Service from './service/service';
import {ServiceProvider} from './components/service-context';

import store from './store';

const service = new Service();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value = {service}>
				<Router>
					<App/>
				</Router>
			</ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);