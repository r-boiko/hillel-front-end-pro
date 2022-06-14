import {Provider} from "react-redux";

import store from './store/configureStore';

import Posts from "./components/Posts";

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Posts/>
    </div>
  </Provider>
);

export default App;
