import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';
// import router from '../router';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  config.headers['Access-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk5NTRiNDdhMjlmNGMyMGEwNjRkNWRhIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJ2aXAiOiJpbml0IiwiY3JlYXRlZF9hdCI6ImluaXQiLCJtb2RpZmllZF9hdCI6ImluaXQiLCJfX3YiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJ2aXAiOnRydWUsImNyZWF0ZWRfYXQiOnRydWUsIm1vZGlmaWVkX2F0Ijp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiZW1haWwiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsidmlwIjowLCJjcmVhdGVkX2F0IjoiMjAxNy0wOC0xN1QwNzo1MjozOS4yMjhaIiwibW9kaWZpZWRfYXQiOiIyMDE3LTA4LTE3VDA3OjUyOjM5LjIyOFoiLCJfX3YiOjAsInBhc3N3b3JkIjoiZnVja2Z1Y2siLCJuYW1lIjoibHdpbyIsImVtYWlsIjoiNDQzNDc0NzEzQHFxLmNvbSIsIl9pZCI6IjU5OTU0YjQ3YTI5ZjRjMjBhMDY0ZDVkYSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTAyOTU2NDExLCJleHAiOjE1MDMwNDI4MTF9.-qsu_K4LvqmSk4bzBFtfpNFyW-x7fqy7GUMyqDfqjGk';
  if (store.getters.token) {
    // config.headers['Access-Token'] = store.getters.token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['Access-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk5NTRiNDdhMjlmNGMyMGEwNjRkNWRhIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJ2aXAiOiJpbml0IiwiY3JlYXRlZF9hdCI6ImluaXQiLCJtb2RpZmllZF9hdCI6ImluaXQiLCJfX3YiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJ2aXAiOnRydWUsImNyZWF0ZWRfYXQiOnRydWUsIm1vZGlmaWVkX2F0Ijp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiZW1haWwiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsidmlwIjowLCJjcmVhdGVkX2F0IjoiMjAxNy0wOC0xN1QwNzo1MjozOS4yMjhaIiwibW9kaWZpZWRfYXQiOiIyMDE3LTA4LTE3VDA3OjUyOjM5LjIyOFoiLCJfX3YiOjAsInBhc3N3b3JkIjoiZnVja2Z1Y2siLCJuYW1lIjoibHdpbyIsImVtYWlsIjoiNDQzNDc0NzEzQHFxLmNvbSIsIl9pZCI6IjU5OTU0YjQ3YTI5ZjRjMjBhMDY0ZDVkYSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTAyOTU2NDExLCJleHAiOjE1MDMwNDI4MTF9.-qsu_K4LvqmSk4bzBFtfpNFyW-x7fqy7GUMyqDfqjGk';
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => response.data,
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
//  const res = response.data;
//     if (res.code !== 20000) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 5 * 1000
//       });
//       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload();// 为了重新实例化vue-router对象 避免bug
//           });
//         })
//       }
//       return Promise.reject(error);
//     } else {
//       return response.data;
//     }
  error => {
    console.log('err' + error);// for debug
    /*Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });*/
    return Promise.reject(error.response.data);
  }
)

export default service;
