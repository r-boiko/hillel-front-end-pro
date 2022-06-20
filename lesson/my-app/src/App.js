import {Provider} from "react-redux";

import store from './store/configureStore';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      app
    </div>
  </Provider>
);

export default App;
