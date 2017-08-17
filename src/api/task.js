import fetch from 'utils/fetch';

export function getTasks() {
  return fetch({
    url: `/tasks`,
    method: 'get',
  });
}
export function getTask(id) {
  return fetch({
    url: `/tasks/${id}`,
    method: 'get',
  })
}
export function postTask(params) {
  return fetch({
    url: `/tasks`,
    method: 'post',
    data: params,
  })
}
export function putTask(id, params) {
  return fetch({
    url: `/tasks/${id}`,
    method: 'put',
    data: params,
  })
}
