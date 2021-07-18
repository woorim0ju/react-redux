import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; //npm install redux-thunk

//middleware가 여러개가 될수 있기 때문에 변수를 만들고, logger를 담아줌
const middleware = [logger, thunk]

//const store = createStore(rootReducer, applyMiddleware(logger));
//spread operator로 [logger] 배열(껍데기)안의 내용물만 전달됨 -위와 똑같이 작동
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));


export default store;