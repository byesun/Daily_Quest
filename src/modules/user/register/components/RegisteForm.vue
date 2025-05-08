<script setup>
import PersonalInformation from '@/modules/user/register/components/PersonalInformation.vue'
import BaseInput from '@/components/BaseSetting/BaseInput.vue'
import BaseButton from '@/components/BaseSetting/BaseButton.vue'
import { useUserRegisterStore } from '@/modules/user/register/user-store.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const registerStore = useUserRegisterStore()
const router = useRouter()

const isLoading = ref(false)
const errorMessage = ref('')
const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const handleModalClose = () => {
  form.agreeTerms = true
  showModal.value = false
}

const { form, errors } = registerStore

// const resetErrors = () => {
//   Object.keys(errors).forEach(key => {
//     errors[key] = '';
//   })
// }
// const validateForm = () => {
//
//   resetErrors();
//
//   // 유효성 검사
// }

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert('회원가입 성공!')
    router.push('/login')
  } catch (err) {
    errorMessage.value = '회원가입에 실패'
    console.error('register error: ', err)
  } finally {
    isLoading.value = false
  }
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

    <div class="form-group">
      <label for="email-id" class="form-label">이메일</label>
      <div class="email-input-group">
        <input
          id="email-id"
          v-model="form.email.id"
          type="text"
          placeholder="아이디"
          class="form-input email-id"
          required
        />
        <span class="email-separator">@</span>
        <select
          v-model="form.selectedDomain"
          class="form-input email-domain-select"
          v-if="form.selectedDomain !== 'custom'"
        >
          <option v-for="domain in form.emailDomains" :key="domain.value" :value="domain.value">
            {{ domain.label }}
          </option>
        </select>
        <input
          v-if="form.selectedDomain === 'custom'"
          v-model="form.customDomain"
          type="text"
          placeholder="직접 입력"
          class="form-input email-domain-input"
          required
        />
      </div>
      <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
    </div>

    <div class="form-group">
      <label for="phone-first" class="form-label">휴대폰 번호</label>
      <div class="phone-input-group">
        <select id="phone-first" v-model="form.phone.first" class="form-input phone-part" required>
          <option value="010">010</option>
          <option value="011">011</option>
          <option value="016">016</option>
          <option value="017">017</option>
          <option value="018">018</option>
          <option value="019">019</option>
        </select>
        <span class="phone-separator">-</span>
        <input
          v-model="form.phone.middle"
          type="text"
          maxlength="4"
          placeholder="0000"
          class="form-input phone-part"
          required
        />
        <span class="phone-separator">-</span>
        <input
          v-model="form.phone.last"
          type="text"
          maxlength="4"
          placeholder="0000"
          class="form-input phone-part"
          required
        />
      </div>
      <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
    </div>

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

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--search-input-background-color);
  color: var(--text-primary);
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-light);
}

.email-input-group,
.phone-input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.email-id {
  flex: 1;
}

.email-separator,
.phone-separator {
  font-weight: 500;
  color: var(--text-secondary);
}

.email-domain-select {
  flex: 1;
}

.email-domain-input {
  flex: 1;
}

.phone-part {
  flex: 1;
  text-align: center;
}

.error-message {
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
</style>
