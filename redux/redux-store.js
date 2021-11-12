import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./Reducers/home-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
let reducers = combineReducers({
    homePage: homeReducer
})
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ["homePage"]

  }
  const persistedReducer = persistReducer(persistConfig, reducers)
  export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store)
    return { store, persistor }
  }