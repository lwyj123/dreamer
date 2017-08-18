import { signin, signup } from 'api/auth';
import { storeWithExpiration } from 'utils';

const user = {
  state: storeWithExpiration.get('user') || {},

  mutations: {
    SET_USER: (state, userInfo) => {
      console.log(userInfo)
      state = userInfo
    },
    LOGOUT_USER: state => {
      state = {}
    },
  },

  actions: {
    Login({ commit }, formObj) {
      return new Promise((resolve, reject) => {
        signin(formObj).then(response => {
          const data = response;
          storeWithExpiration.set('user', response, 86400000);
          commit('SET_USER', response);  
          resolve();      
        }).catch(error => {
          reject(error);
        });
      });
    },
    Signup({ commit }, formObj) {
      return new Promise((resolve, reject) => {
        signup(formObj).then(response => {
          const data = response;
          storeWithExpiration.set('user', response, 86400000);
          commit('SET_USER', response);  
          resolve();      
        }).catch(error => {
          reject(error);
        });
      });
    },
    // for later one-use token, Logout should in actions
    Logout({ commit }) {
      commit('LOGOUT_USER'); 
      storeWithExpiration.set('user', {});
    }
  }
};

export default user;
