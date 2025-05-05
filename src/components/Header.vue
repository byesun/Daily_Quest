<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/">
          <h1>Daily Quest</h1>
        </router-link>
      </div>

      <button class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="nav" :class="{ open: isMenuOpen }">
        <ul class="nav-list">
          <li>
            <router-link to="/">홈</router-link>
          </li>
          <li>
            <router-link to="/quests">퀘스트 목록</router-link>
          </li>
          <li>
            <router-link to="/profile">My Page</router-link>
          </li>
          <li>
            <router-link to="/login">로그인</router-link>
          </li>
          <li>
            <router-link to="/register">회원가입</router-link>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0.5rem;
  margin-left: 60%;
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
  margin: 0;
  background-color: var(--card-color);
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.nav.open .nav-list {
  display: flex;
}

.nav-list li {
  padding: 0.5rem 1rem;
}

.nav-list a {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  color: var(--primary-color);
}

@media (min-width: 769px) {
  .nav-list {
    display: flex !important;
    flex-direction: row;
    position: static;
    background: none;
    box-shadow: none;
    width: auto;
  }

  .nav-list li {
    margin-left: 1.5rem;
    padding: 0;
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
