<script setup>
import { reactive, ref } from 'vue'
import BaseInput from '@/components/BaseSetting/BaseInput.vue'
import BaseButton from '@/components/BaseSetting/BaseButton.vue'
import PersonalInformation from '@/modules/user/register/components/PersonalInformation.vue'

const isLoading = ref(false)
const errorMessage = ref('')
const showModal = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false,
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: '',
})

const openModal = () => {
  showModal.value = true
}

const handleModalClose = () => {
  form.agreeTerms = true
  showModal.value = false
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="register-form">
    <base-input
      id="id"
      label="아이디"
      v-model="form.id"
      type="text"
      placeholder="아이디를 입력하세요."
      :error="errors.id"
      required
    />

    <base-input
      id="name"
      label="이름"
      v-model="form.name"
      type="text"
      placeholder="이름을 입력하세요"
      :error="errors.name"
      required
    />

    <base-input
      id="email"
      label="이메일"
      v-model="form.email"
      type="email"
      placeholder="이메일을 입력하세요"
      :error="errors.email"
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

    <base-input
      id="confirmPassword"
      label="비밀번호 확인"
      v-model="form.confirmPassword"
      type="password"
      placeholder="비밀번호를 다시 입력하세요"
      :error="errors.confirmPassword"
      required
    />
    <div class="form-agreement">
      <label class="checkbox-label">
        <input type="checkbox" v-model="form.agreeTerms" required />
        <span @click.prevent="openModal" class="terms-link"
          >이용약관 및 개인정보 처리방침에 동의합니다</span
        >
      </label>
      <p v-if="errors.agreeTerms" class="error-message">{{ errors.agreeTerms }}</p>
    </div>

    <base-button type="submit" variant="primary" block :disabled="isLoading">
      {{ isLoading ? '가입 중...' : '회원가입' }}
    </base-button>

    <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

    <div class="auth-links">
      <p>
        이미 계정이 있으신가요?
        <router-link to="/login">로그인</router-link>
      </p>
    </div>

    <PersonalInformation :visible="showModal" @close="handleModalClose" />
  </form>
</template>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-agreement {
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 0.875rem;
}

.checkbox-label input {
  margin-right: 0.5rem;
  margin-top: 0.25rem;
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
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
