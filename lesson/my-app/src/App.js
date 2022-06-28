import {Provider} from "react-redux";

import store from './store/configureStore';

// import Todos from './components/TodosRedux';
import Movies from './pages/Movies';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Movies/>
    </div>
  </Provider>
);

export default App;
