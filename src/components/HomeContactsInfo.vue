<template>
    <div class="contact-form">
        <h1 class="fade-in">Вы всё ещё думаете? Просто попробуйте</h1>
        <p class="fade-in">
            Оставьте заявку и наш консультант ответит на любые вопросы, расскажет про все услуги нашей компании.
        </p>
        <form @submit.prevent="submitForm" class="fade-in">
            <input type="text" placeholder="Фамилия Имя Отчество" v-model="form.name" required />
            <input type="email" placeholder="Электронная почта" v-model="form.email" required />
            <input type="tel" placeholder="+7" v-model="form.phone" required />
            <input type="text" placeholder="Ваша организация" v-model="form.organization" required />
            <div class="tax-form">
                <button type="submit">Начать сотрудничество</button>
            </div>
        </form>
    </div>
</template>
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          organization: '',
          inn: '',
          kpp: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Form submission logic
      }
    },
    mounted() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }
  };
  </script>
  
  <style scoped>
  .contact-form {
    background-color: rgba(0, 0, 0, 0.85);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    margin: 40px;
    padding: 40px;
    border-radius: 8px;
    width: 50%;
    margin-left: 25%;
  }
  
  .contact-form h1,
  .contact-form p {
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .contact-form input,
  .contact-form button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .contact-form button {
    background-color: #ed0000;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 30%;
    margin: auto;
  }
  
  .contact-form .tax-info {
    display: flex;
    justify-content: space-between;
  }
  
  .contact-form .tax-info input {
    width: 20%;
  }
  
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  