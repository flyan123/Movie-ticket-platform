// // import { createStore } from "redux"
// import { createStore,applyMiddleware } from "redux"
// import rootReducer from "../reducers"
// import { composeWithDevTools } from "redux-devtools-extension"
// // import thunk from "redux-thunk"

// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));
// // const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

// export default store;

import { configureStore } from '@reduxjs/toolkit';  
import rootReducer from '../reducers';  

  
const store = configureStore({  
  reducer: rootReducer,  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()  
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  
});  
  
export default store;