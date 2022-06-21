import {Provider} from "react-redux";

import store from './store/configureStore';

import Welcome from './tests/Welcome//Welcome';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Welcome />
    </div>
  </Provider>
);

export default App;
