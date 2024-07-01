<template>
  <div class="about-container">
    <section class="about-section">
      <div class="about-content">
        <h1>О компании</h1>
        <p>Уникальная команда молодых талантливых специалистов по разработке программных и аппаратных решений. Одни из лучших IoT-разработчиков в мире по версии профильных рейтинговых агентств.</p>
        <button @click="startPartnership">Начать сотрудничество</button>
      </div>
    </section>
    <section class="popup-section" ref="popupSection">
      <div class="popup-content" v-if="showPopup">
        <AboutUsSection />
             </div>
    </section>
  </div>
</template>

<script>
import AboutUsSection from '../components/AboutUsSection.vue';

export default {
  name: "About",
  data() {
    return {
      showPopup: false
    };
  },
  components: {
    AboutUsSection,
  },
  methods: {
    startPartnership() {
      // Handle partnership start logic
    },
    handleScroll() {
      const popupSection = this.$refs.popupSection;
      if (popupSection) {
        const sectionTop = popupSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        this.showPopup = sectionTop < windowHeight;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.about-container {
  position: relative;
  overflow: hidden;
}

.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://i.gifer.com/origin/69/694b33c31463444d3d71eec7f822c49f.gif');
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-align: center;
}

.about-content h1 {
  font-size: 3rem;
  color: #ffffff; /* Lime color */
}

.about-content p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.about-content button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #D32A4D; /* Button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.about-content button:hover {
  background-color: #911e35; /* Darker button color on hover */
}

.popup-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: #000000;
  text-align: center;
  transition: opacity 1s;
}

.popup-content p {
  font-size: 1.2rem;
}
</style>
