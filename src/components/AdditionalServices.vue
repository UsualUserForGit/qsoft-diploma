<template>
    <section ref="additionalServicesSection" class="additional-services">
        <h2>Цифровая Трансформация клиентского сервиса на основе A.I. и Machine Learning</h2>
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
          { 
            title: "M.L.", 
            description: " Персонализированные предложения на основе Machine Learning ",
            image: require('@/assets/machine-learning.gif')
          },
          { 
            title: "A.I. ", 
            description: " Внедрение чат-ботов с Искусственным Интеллектом ",
            image: require('@/assets/AI.gif')
          },
          { 
            title: "CRM", 
            description: " Внедрение и интеграция с CRM системами, внедрение программ лояльности ",
            image: require('@/assets/crm.gif')
          },
          { 
            title: "Support", 
            description: " Внедрение и интеграция с сервисами поддержки клиентов ",
            image: require('@/assets/support.gif')
          },
          { 
            title: " Omni-Channel ", 
            description: " Интеграция коммуникационных каналов в единую информационную среду, интеграция с розничными точками и back-office ",
            image: require('@/assets/omni-channel.gif')
          },
          { 
            title: " Digital profile / CDP ", 
            description: " Внедрение Customer Data Platform – Агрегация данных по всем активностям лидов и клиентов, создание единого профиля клиента ",
            image: require('@/assets/cdpt.gif')
          }
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
  
      const cards = this.$refs.additionalServicesSection.querySelectorAll('.card');
      cards.forEach(card => {
        observer.observe(card);
      });
    },
  };
  </script>
  
  <style scoped>
  .additional-services {
      padding: 40px 20px;
      background-color: #000000;
      background-image: url('https://i.pinimg.com/originals/a0/4d/4b/a04d4b5ed7c7d4bc264c292e267bcd8e.gif');
      background-color: black;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
  }
  
  .additional-services h2 {
    text-align: center;
    font-size: 2rem;
    color: #dedddd;
    margin-bottom: 40px;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #ececec;
    border-radius: 8px;
    padding: 20px;
    width: 270px;
    height: 350px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s ease;
  }
  
  .card.visible {
    opacity: 1;
    transform: scale(1);
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
    cursor:pointer;
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
  