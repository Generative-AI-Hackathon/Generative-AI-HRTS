import { all, call, put } from "redux-saga/effects";
import { setHistory, setHistoryFailed, setHistoryLoading } from "../ducks/historyDuck";
import { loadHistory } from "../request/historyRequests";




export function* handleLoadHistory(action: { payload: string }) {
  try {
    yield put(setHistoryLoading());
    const histories = yield call(loadHistory, action.payload);
    yield put(setHistory(histories));
  } catch (error) {
    yield put(setHistoryFailed((error as Error).message));
  }
}


export function* watchHandleLoadHistory() {
  yield takeEvery(Actions.LOADHISTORY, handleLoadHistory);
}



export default function* authSaga() {
  yield all([watchHandleLoadHistory()]);
}
