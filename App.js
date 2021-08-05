import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import redusers from "./src/redusers";
import Screen from "./src/screen1";

const store = createStore(redusers,applyMiddleware(ReduxThunk))

const App = () =>{
  return(
    <Provider store={store}>
      <Screen/>
    </Provider>
  )
}
export default App