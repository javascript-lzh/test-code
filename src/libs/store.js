import Vue from 'vue'

export const store = Vue.observable({
  userInfo: {
    name: '1231231'
  },
  roleIds: []
})
export const mutations = {
  setUserInfo (userInfo) {
    store.userInfo = userInfo
  },
  setRoleIds (roleIds) {
    store.roleIds = roleIds
  }
}
