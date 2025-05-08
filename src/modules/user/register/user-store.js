import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserRegisterStore = defineStore('userRegister', () => {
  const form = reactive({
    id: '',
    name: '',
    phone: {
      first: '010',
      middle: '',
      last: '',
    },
    email: {
      id: '',
      domain: '',
    },
    emailDomains: [
      { value: 'custom', label: '직접 입력' },
      { value: 'gmail.com', label: 'gmail.com' },
      { value: 'naver.com', label: 'naver.com' },
      { value: 'daum.net', label: 'daum.net' },
      { value: 'kakao.com', label: 'kakao.com' },
      { value: 'hanmail.net', label: 'hanmail.net' },
    ],
    customDomain: '',
    selectedDomain: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const errors = reactive({
    id: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: '',
  })

  return {
    form,
    errors,
  }
})
