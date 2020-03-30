import { createStore, applyMiddleware } from 'redux'; 
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchDataStart } from './data/data.sagas'

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchDataStart);

export default store;