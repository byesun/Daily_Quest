<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/BaseSetting/BaseInput.vue'
import BaseButton from '@/components/BaseSetting/BaseButton.vue'
import { useUserLoginStore } from '@/modules/user/login/login-store.js'

const isLoading = ref(false)
const errorMessage = ref('')

const form = reactive({
  id: '',
  password: '',
  rememberMe: false,
})

const errors = reactive({
  id: '',
  password: '',
})

const loginStore = useUserLoginStore()
const router = useRouter()

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''

  await new Promise((resolve) => setTimeout(resolve, 500))

  const success = loginStore.login({
    id: form.id,
    password: form.password,
  })

  if (success) {
    router.push('/')
  } else {
    errorMessage.value = loginStore.errorMessage
  }

  isLoading.value = false
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <base-input
      id="id"
      label="아이디"
      v-model="form.id"
      type="text"
      placeholder="아이디을 입력하세요"
      :error="errors.id"
      required
    />

    <base-input
      id="password"
      label="비밀번호"
      v-model="form.password"
      type="password"
      placeholder="비밀번호를 입력하세요"
      :error="errors.password"
      required
    />

    <div class="form-options">
      <label class="checkbox-label">
        <input type="checkbox" v-model="form.rememberMe" />
        <span>로그인 상태 유지</span>
      </label>
      <div class="user-define">
        <router-link to="/find-id" class="forgot-id">아이디 찾기</router-link>
        <a> \ </a>
        <router-link to="/find-password" class="forgot-password">비밀번호 찾기</router-link>
      </div>
    </div>

    <base-button type="submit" variant="primary" block :disabled="isLoading">
      {{ isLoading ? '로그인 중...' : '로그인' }}
    </base-button>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

    <div class="auth-links">
      <p>
        계정이 없으신가요?
        <router-link to="/register">회원가입</router-link>
      </p>
    </div>
  </form>
</template>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-label input {
  margin-right: 0.5rem;
}

.forgot-id {
  color: var(--primary-color);
  text-decoration: none;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.form-error {
  color: var(--error-color);
  margin-top: 1rem;
  text-align: center;
}

.auth-links {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
}

.auth-links a {
  color: var(--primary-color);
  text-decoration: none;
}

.auth-links a:hover {
  text-decoration: underline;
}
</style>
