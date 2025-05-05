<script setup></script>
<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">
          <h1>Daily Quest</h1>
        </router-link>
      </div>
      <nav class="nav">
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
  background-color: var(--card-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}

.logo a {
  text-decoration: none;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-list li {
  margin-left: 1.5rem;
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
</style>
