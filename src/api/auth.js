import fetch from 'utils/fetch';

export function signin(formObj) {
  return fetch({
    url: '/signin',
    method: 'post',
    data: formObj,
  });
}

export function signup(formObj) {
  return fetch({
    url: '/users',
    method: 'post',
    data: formObj,
  });
}