import {Provider} from "react-redux";

import store from './store/configureStore';

import AntDesign from "./components/AntDesign";
import Posts from "./components/Posts";

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <AntDesign/>
      <Posts/>
    </div>
  </Provider>
);

export default App;
