import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUserRegisterStore } from '@/modules/user/register/user-store.js'

export const useUserLoginStore = defineStore('userLogin', () => {
  const isLoggedIn = ref(false)
  const currentUser = ref(null)
  const errorMessage = ref('')

  const login = ({ id, password }) => {
    const registerStore = useUserRegisterStore()

    if (registerStore.form.id === id && registerStore.form.password === password) {
      isLoggedIn.value = true
      currentUser.value = { id }
      errorMessage.value = ''
      return true
    } else {
      errorMessage.value = '아이디 또는 비밀번호가 올바르지 않습니다.'
      return false
    }
  }

  const logout = () => {
    isLoggedIn.value = false
    currentUser.value = null
  }

  return {
    isLoggedIn,
    currentUser,
    errorMessage,
    login,
    logout,
  }
})
