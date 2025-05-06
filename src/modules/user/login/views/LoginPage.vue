<script setup>
import LoginForm from '@/modules/user/login/components/LoginForm.vue'
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <h1>로그인</h1>
        <img
          src="../../../../assets/images/login-character.png"
          alt="캐릭터 이미지"
          class="character"
        />
        <p>Daily Quest에 오신 것을 환영합니다!</p>
      </div>
      <login-form />
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 1rem;
}

.login-container {
  width: 100%;
  max-width: 480px;
  background-color: var(--card-color);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.login-header p {
  color: var(--text-secondary);
}

.character {
  width: 25%;
  height: 20%;
}
</style>
