<template>
  <div class="contacts-container">
    <div class="contacts-info">
      <h1>Центральный офис в Москве</h1>
      <div class="contact-details">
        <div class="address">
          <p><strong>Адрес</strong></p>
          <p>101000, Россия, Москва,
Покровский бульвар, 4/17, стр.1 </p>
          <p>4 этаж</p>
        </div>
        <div class="work-hours">
          <p><strong>Режим работы</strong></p>
          <p>09:00 - 18:00</p>
        </div>
        <div class="phone">
          <p><strong>Телефон</strong></p>
          <p>+7 (495) 771-7363</p>
        </div>
      </div>
      <p>
        Обязательно приходите к нам на чашку ароматного кофе. Совместно обсудим ваши задачи для бизнеса и предложим решение для его развития! Если нужно, проконсультируем онлайн, по телефону или почте – просто напишите нам сообщение и укажите предпочтительный способ для связи.
      </p>
      <button class="message-button">НАПИСАТЬ СООБЩЕНИЕ</button>
      <div class="social-links">
        <a href="#" class="vk-link"></a>
        <a href="#" class="telegram-link"></a>
        <a href="#" class="youtube-link"></a>
      </div>
    </div>
    <div class="map-container">
      <!-- Assuming the use of a map iframe or a map component here -->
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000.0461145469252!2d37.64488230625089!3d55.758023473605576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a8ad3684ac3%3A0xfc33ff807dfdaf82!2z0J_QvtC60YDQvtCy0YHQutC40Lkg0LEt0YAsIDQvMTcg0YHRgtGA0L7QtdC90LjQtSAxLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTA5MDI4!5e0!3m2!1sru!2sus!4v1717749033810!5m2!1sru!2sus"  width="100%" height="450"  style="border:0;" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
.contacts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.contacts-info {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
}

.contact-details {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.contact-details div {
  flex: 1;
}

.message-button {
  background-color: #D32A4D;
  color: #ffffff;
  border: 2px solid #D32A4D;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.message-button:hover {
  background-color: #901f36;
  border: 2px solid #901f36;
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.social-links a {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-size: cover;
}

.vk-link {
  background-image: url('https://i0.wp.com/edrublevsky.ru/wp-content/uploads/2016/01/%D0%B2%D0%BA-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.telegram-link {
  background-image: url('https://static.tildacdn.com/tild3538-6138-4939-b630-626562393832/-.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.youtube-link {
  background-image: url('https://pngimg.com/uploads/youtube/youtube_PNG102351.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.map-container {
  width: 100%;
  max-width: 1200px;
}
</style>
