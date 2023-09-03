import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import authReducer from "./ducks/authDuck"
import authSaga from "./sagas/authSaga"
import historiesReducer from "./ducks/historyDuck"
import historiesSaga from "./sagas/historySaga"

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
  reducer: { auth: authReducer, history: historiesReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  devTools: import.meta.env.VITE_APP_CODE == "PRODUCTION",
});
    
sagaMiddleware.run(authSaga)
sagaMiddleware.run(historiesSaga);


export default store