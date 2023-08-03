// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware, combineReducers} from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
// eslint-disable-next-line no-unused-vars
import thunk from 'redux-thunk' 

import { usersReducer} from './reducers/userReducer'
const rootReducer = combineReducers ({
    // eslint-disable-next-line no-undef
    usersReducer: usersReducer
})
const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
  // eslint-disable-next-line no-unused-vars
  const store = createStore(
    // eslint-disable-next-line no-undef
    rootReducer,
    composeEnhancers(
      // eslint-disable-next-line no-undef
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );
export default store
