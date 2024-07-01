<template>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="company">Название компании</label>
          <input type="text" id="company" v-model="form.company" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="phone">Номер телефона</label>
          <input type="tel" id="phone" v-model="form.phone" required />
        </div>
        <div class="form-group">
          <label for="questions">Ваш вопрос или сообщение</label>
          <input type="text" id="questions" v-model="form.questions">
        </div>
        <div class="form-button-group">
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
          company: '',
          email: '',
          phone: '',
          questions: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log(this.form);
        // Reset form
        this.form = {
          name: '',
          company: '',
          email: '',
          phone: '',
          questions: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 400px;
    margin: 0 auto;
    animation: fadeInUp 0.5s ease-out forwards;
    color: white;
  }
  
  .form-group {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  .form-button-group {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-around;
  }

  
  .form-container button {
    background-color: #D32A4D;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .form-container button:hover {
    background-color: #a5243a;
}
  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>
  