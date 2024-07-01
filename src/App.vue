<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img src="@\pics\qsoft.png" alt="QSOFT Logo">
      </div>
      <nav class="nav">
        <router-link v-for="button in buttons" :key="button.name" :to="button.path" class="nav-button">
          {{ button.name }}
        </router-link>
      </nav>
    </header>
      <router-view />

    <footer class="footer">
      © QSOFT, 2024 Политика конфиденциальности и обработки персональных данных
    </footer>
  </div>
</template>

<script>
import ServiceCards from './components/ServiceCards.vue';
import AdditionalServices from './components/AdditionalServices.vue';

export default {
  data() {
    return {
      buttons: [
        { name: 'Главная', path: '/' },
        { name: 'Начать сотрудничество', path: '/cooperation' },
        { name: 'Наши проекты', path: '/portfolio' },
        { name: 'О нас', path: '/about' },
        { name: 'Отзывы', path: '/reviews' },
        { name: 'Контакты', path: '/contacts' }
      ],
    };
  },
  components: {
    ServiceCards,
    AdditionalServices,
  },
  beforeCreate: function() {
        document.body.style = 'margin:0px;';
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  border-bottom: 1px solid #ececec;
}

.logo img {
  height: 50px;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-button {
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  color: #333;
}

.nav-button:hover {
  color: #D32A4D;
  transform: scale(1.1);
}

.main-content {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-image: url('https://i.gifer.com/origin/69/694b33c31463444d3d71eec7f822c49f.gif');
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.main-content .main-banner{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);

}
.main-content h1 {
  font-size: 2.8rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 900;
}

.main-content p {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.main-content input {
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  width: 300px;
  max-width: 80%;
}

.cta-button {
  background-color: #D32A4D;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #a5243a;
}

.footer {
  background-color: #252525;
  color: white;
  text-align: center;
  padding: 10px 20px;
  border-top: 1px solid #ececec;
}
</style>

