import fileService from '@/services/api/fileService';

export default {
  namespace: "workspaceHome",
  state: {
    fileData: [],
    bookData: [],
  },
  reducers: {
    setData(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    }
  },
  effects: {
    *initData({payload}, {call, put}) {
      let {queryFilesByTs} = fileService;
      const response = yield call(queryFilesByTs, payload);
      yield put({
        type: "setData",
        payload: response,
      });
    },
  }
}
