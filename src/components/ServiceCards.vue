<template>
    <section ref="servicesSection" class="services">
      <h2>Наши услуги</h2>
      <div class="card-container">
        <div v-for="(service, index) in services" :key="index" class="card">
            <img :src="service.image" :alt="service.title" class="card-image" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { title: "E-commerce ", description: " Лучшее в России портфолио крупных интернет-магазинов", image: require('@/assets/web-development.gif') },
          { title: "Mobile App Development", description: " Разработка нативных мобильных приложений", image: require('@/assets/mobile-development.gif') },
          { title: "Intranet", description: " Cамый опытный разработчик корпоративных порталов в России ", image: require('@/assets/intranet-development.gif') },
          { title: " SLA 24/7 ", description: " Выделенный отдел технической поддержки с SLA 24/7 ", image: require('@/assets/sla-development.gif') },
          { title: "Personal", description: " Большой опыт в разработке Личных Кабинетов и автоматизации работы с клиентами ", image: require('@/assets/personal-development.gif') },
          { title: "Digital", description: " Комплексная интеграция информационных систем на основе веб-технологий ", image: require('@/assets/digital-development.gif') }
        ],
      };
    },
    mounted() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });
  
      const cards = this.$refs.servicesSection.querySelectorAll('.card');
      cards.forEach(card => {
        observer.observe(card);
      });
    },
  };
  </script>
  
  <style scoped>
  .services {
    padding: 40px 20px;
    background-color: #f8f8f8;
  }
  
  .services h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin-bottom: 40px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #ececec;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease;
  }
  
  .card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .card-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 15px;
}

  .card h3 {
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .card h3:hover {
    color: #D32A4D;
    transition: color 0.3s;
  }
  
  .card p {
    font-size: 1rem;
    color: #666;
  }
  </style>
  