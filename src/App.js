import { Provider } from "react-redux";

import Header from './components/Header';
import TodoBody from './components/TodoBody';

import store from "./redux/store";

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <div>
        <Header />
        <TodoBody />
      </div>
    </Provider>
  );
}

export default App;
