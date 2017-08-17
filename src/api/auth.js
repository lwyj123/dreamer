import fetch from 'utils/fetch';

export function signin(params) {
  const data = {
    name: params.name,
    password: params.password,
  };
  return fetch({
    url: '/signin',
    method: 'post',
    data: data,
  });
}