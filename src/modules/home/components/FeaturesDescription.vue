<script setup></script>

<template>
  <section class="features">
    <h2>게임처럼 즐기는 할 일 관리</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">🏆</div>
        <h3>경험치와 레벨</h3>
        <p>퀘스트를 완료하고 경험치를 얻어 레벨을 올리세요.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>일일 및 주간 퀘스트</h3>
        <p>정기적인 퀘스트로 꾸준한 습관을 형성하세요.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🥇</div>
        <h3>업적과 배지</h3>
        <p>특별한 목표를 달성하고 배지를 수집하세요.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>통계와 분석</h3>
        <p>자신의 생산성을 추적하고 개선하세요.</p>
      </div>
    </div>
  </section>
</template>

<style>
.features {
  padding: 4rem 1rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.features h2,
.testimonials h2,
.cta h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  background-color: var(--card-color);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature-card p,
.testimonial-card p {
  color: var(--text-secondary);
}

.testimonial-card p {
  font-style: italic;
  margin-bottom: 1rem;
}
</style>
