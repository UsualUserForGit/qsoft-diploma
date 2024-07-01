<template>
  <div class="portfolio-container">
    <div class="portfolio-grid">
      <div class="portfolio-item" v-for="project in projects" :key="project.id">
        <img :src="project.image" :alt="project.title" />
        <div class="portfolio-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "Reviews",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: `Е.В. Савенко, Заместитель генерального директора`,
          description: `АО "СберТех" благодарит ООО "Кьюсофт" за разработку и внедрение корпоративного Интранет-портала.`,
          image: require('../assets/reviews/sberbank_tehnologii_-_sberteh.png')
        },
        {
          id: 2,
          title: `Берлизева М.С., Ведущий специалист по управлению клиентским опытом`,
          description: `"Департамент послепродажного обслуживания ООО «Киа Россия и СНГ» выражает благодарность digital-интегратору QSOFT за качественную реализацию проекта по разработке приложения для интерактивной приемки автомобилей в рамках проекта МуService 2.0."`,
          image: require('../assets/reviews/kia-new-2021-seeklogo.com-4.png')
        },
        {
          id: 3,
          title: `Е.В. Каменецкая, Начальник управления маркетинга`,
          description: `“КБ «Ренессанс Кредит» выражает благодарность команде QSOFT и уверенность, что впереди множество интересных и качественных совместных проектов.”`,
          image: require('../assets/reviews/renessansjpeg.jpeg')
        },
        {
          id: 4,
          title: `Н.А. Козлова, Начальник Управления по взаимодействию с бизнес-заказчиками`,
          description: `ПАО «Новолипецкий металлургический комбинат» выражает благодарность сотрудникам QSOFT за разработку самого большого в России корпоративного портала на платформе Битрикс24:Enterprise для 50 тысяч сотрудников.`,
          image: require('../assets/reviews/NLMK_logo_new.jpg')
        },
        {
          id: 5,
          title: `Олаф Франк, Руководитель отдела мультиканальности ООО «Гиперглобус», Юрий Мацейлик, Руководитель маркетинга цифровых каналов продаж ООО «Гиперглобус»`,
          description: `ООО «Гиперглобус» получил хороший результат, соответствующий поставленным задачам, проводились регулярные встречи для корректировки и уточнения пожеланий заказчика. Важный проект был завершен в срок и качественно, что немаловажно.`,
          image: require('../assets/reviews/globus.png')
        },
        {
          id: 6,
          title: `М.В. Марасанов, ВРИО Директора Департамента по развитию продуктов и услуг`,
          description: `В рамках проекта перед разработчиком стояли сложные и нестандартные задачи, которые были успешно решены. В частности, это взаимодействие с системами розничной сети, интеграция с сервисами сайта mts.ru, интеграция товарного каталога с внешними сервисами, работа с разными платежными системами и прочее.

Выражаем благодарность компании «КьюСофт», показавшей себя надежным партнером и способной решать сложные интеграционные задачи.`,
          image: require('../assets/reviews/mts.png')
        }
      ]
    };
  }
};
</script>

<style scoped>
.portfolio-container {
  padding: 20px;
}

.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.portfolio-item {
  flex: 1 1 calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.portfolio-item:hover {
  transform: scale(1.05);
}

.portfolio-image {
  background-size: cover;
  background-position: center;
  height: 200px;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
}

.portfolio-info {
  padding: 20px;
  text-align: center;
}

.portfolio-info h3 {
  margin: 10px 0;
  font-size: 1.5rem;
}

.portfolio-info p {
  font-size: 1rem;
}
</style>
