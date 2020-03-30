import { createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run()

export default store;