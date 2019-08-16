import request from '@/utils/request';

export async function queryFilesByTs() {
  return request('/api/file/query/ts');
}

export default {
  queryFilesByTs: async function () {
    return request('/api/file/query/ts');
  }
}
