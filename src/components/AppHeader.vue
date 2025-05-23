<script setup>
import { ref } from 'vue'
import { useUserLoginStore } from '@/modules/user/login/login-store.js'
import { storeToRefs } from 'pinia'
import BaseButton from '@/components/BaseSetting/BaseButton.vue'

const isMenuOpen = ref(false)
const loginStore = useUserLoginStore()
const { isLoggedIn } = storeToRefs(loginStore)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const logout = () => {
  loginStore.logout()
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <h1><img src="@/assets/images/logo.png" class="logo-image" alt="로고 이미지" /></h1>
        </router-link>
      </div>

      <button class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="nav" :class="{ open: isMenuOpen }">
        <ul class="nav-list">
          <li v-if="isLoggedIn">
            <router-link to="/quests">퀘스트 목록</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/profile">My Page</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">로그인</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/register">회원가입</router-link>
          </li>
          <li v-if="isLoggedIn">
            <base-button @click="logout" class="logout-btn">로그아웃</base-button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--card-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.header-container {
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 2rem;
}

/* 로고 */
.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.logo a {
  text-decoration: none;
}

.logo-image {
  margin-left: 2rem;
  width: 6rem;
  height: 6rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0.5rem;
  margin-left: auto;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--primary-color);
  margin: 4px 0;
  transition: 0.3s;
}

.nav-list {
  display: none;
  flex-direction: column;
  list-style: none;
  padding: 1rem;
  margin: 1rem 0 0 0;
  background-color: var(--card-color);
  position: absolute;
  top: 100%;
  right: 0;
  width: 12.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.nav.open .nav-list {
  display: flex;
}

.nav-list li {
  padding: 1.5rem 1rem;
  min-width: 100px; /* 항목 크기 일정하게 유지 */
  text-align: center;
}

.nav-list a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-list a:hover,
.nav-list {
  color: var(--primary-color);
}

.logout-btn {
  width: 6rem;
  height: 3rem;
  font-size: 0.8rem;
}

@media (min-width: 769px) {
  .nav-list {
    display: flex !important;
    align-items: center;
    flex-direction: row;
    position: static;
    background: none;
    box-shadow: none;
    width: auto;
  }

  .nav-list li {
    margin-left: 1.5rem;
    padding: 1rem;
  }

  .hamburger {
    display: none;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
}
</style>
