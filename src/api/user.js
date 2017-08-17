import fetch from 'utils/fetch';

export function getUser(id) {
  return fetch({
    url: `/users/${id}`,
    method: 'get',
  });
}
export function postUser(params) {
  return fetch({
    url: `/users`,
    method: 'post',
    data: params,
  });
}
