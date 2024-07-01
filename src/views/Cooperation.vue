<template>
  <div class="contacts-page">
    <h1>Оставьте заявку и мы свяжемся с вами!</h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '../components/ContactsForm.vue';

export default {
  name: "Contacts",
  components: {
    ContactForm
  }
};
</script>

<style scoped>
.contacts-page {
  display: flex;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-image: url('https://i.gifer.com/origin/69/694b33c31463444d3d71eec7f822c49f.gif');
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.contacts-page h1 {
  color: white;
}
</style>
