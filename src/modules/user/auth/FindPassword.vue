<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-header">
        <h1>비밀번호 찾기</h1>
        <p>회원가입 시 등록한 정보로 비밀번호를 재설정할 수 있습니다.</p>
      </div>

      <div v-if="currentStep === 'verification'">
        <form class="auth-form">
          <base-input
            id="userId"
            label="아이디"
            v-model="form.userId"
            type="text"
            placeholder="아이디를 입력하세요"
            :error="errors.userId"
            required
          />

          <div class="verification-method">
            <p class="method-label">인증 방법</p>
            <div class="method-options">
              <label class="radio-label">
                <input type="radio" v-model="form.verificationMethod" value="email" />
                <span>이메일 인증</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="form.verificationMethod" value="phone" />
                <span>휴대폰 인증</span>
              </label>
            </div>
          </div>

          <template v-if="form.verificationMethod === 'email'">
            <base-input
              id="email"
              label="이메일"
              v-model="form.email"
              type="email"
              placeholder="회원가입 시 등록한 이메일을 입력하세요"
              :error="errors.email"
              required
            />
          </template>

          <template v-else-if="form.verificationMethod === 'phone'">
            <base-input
              id="phone"
              label="휴대폰 번호"
              v-model="form.phone"
              type="tel"
              placeholder="회원가입 시 등록한 휴대폰 번호를 입력하세요"
              :error="errors.phone"
              required
            />
          </template>

          <div v-if="isVerificationSent" class="verification-code">
            <base-input
              id="verificationCode"
              label="인증 코드"
              v-model="form.verificationCode"
              type="text"
              placeholder="인증 코드를 입력하세요"
              :error="errors.verificationCode"
              required
            />
            <div class="verification-timer"></div>
          </div>

          <base-button v-if="!isVerificationSent" type="button" variant="primary" block>
            {{ isLoading ? '처리 중...' : '인증 요청' }}
          </base-button>

          <base-button v-else type="submit" variant="primary" block>
            {{ isLoading ? '확인 중...' : '확인' }}
          </base-button>

          <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

          <div class="auth-links">
            <p>
              <router-link to="/login">로그인으로 돌아가기</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import BaseInput from '@/components/BaseSetting/BaseInput.vue'
import BaseButton from '@/components/BaseSetting/BaseButton.vue'

const isLoading = ref(false)
const errorMessage = ref('')
const isVerificationSent = ref(false)
const currentStep = ref('verification')

const form = reactive({
  userId: '',
  verificationMethod: 'email',
  email: '',
  phone: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: '',
})

const errors = reactive({
  userId: '',
  email: '',
  phone: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: '',
})
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 1rem;
}

.auth-container {
  width: 100%;
  max-width: 480px;
  background-color: var(--card-color);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.auth-header p {
  color: var(--text-secondary);
}

.auth-form {
  max-width: 400px;
  margin: 0 auto;
}

.verification-method {
  margin-bottom: 1.5rem;
}

.method-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.method-options {
  display: flex;
  gap: 1.5rem;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-label input {
  margin-right: 0.5rem;
}

.verification-code {
  position: relative;
}

.verification-timer {
  position: absolute;
  right: 0;
  top: 2.5rem;
  color: var(--error-color);
  font-size: 0.875rem;
}

.password-rules ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.password-rules li {
  margin-bottom: 0.25rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1.5rem;
}

.password-rules li:before {
  content: '✕';
  position: absolute;
  left: 0;
  color: var(--error-color);
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

.result-box h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}
</style>
