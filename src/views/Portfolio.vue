<template>
  <div class="portfolio-page">
    <h1>Более 200 проектов для крупнейших российских компаний </h1>
    <div class="portfolio-grid">
      <div v-for="project in projects" :key="project.id" class="portfolio-item">
        <img :src="project.image" :alt="project.title" />
        <div class="overlay">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Ренессанс Банк',
          image: require('@/assets/renessans-kredit-logo.jpg'),
          description: 'Техническая экспертиза решений по редизайну сайта и единой заявки для Ренессанс Банка'
        },
        {
          id: 2,
          title: 'КИА', 
          image: require('@/assets/Kia-Logo-Transparent.jpg'),
          description: 'Киа: цифровая платформа и мобильное приложение для приемки и диагностики автомобилей'
        },
        {
          id: 3,
          title: 'Магнит Аптека',
          image: require('@/assets/magnit-apteka-logo-square.png'),
          description: 'Инструменты масштабирования фарм-ритейлера "Магнит Аптека" в регионы'
        },
        {
          id: 4,
          title: 'LabStore',
          image: require('@/assets/labsotre.jpg'),
          description: 'Labstore: первый российский маркетплейс-агрегатор лабораторного оборудования и реактивов'
        },
        {
          id: 5,
          title: 'Технониколь',
          image: require('@/assets/technonikole.jpg'),
          description: 'Первый в России маркетплейс-агрегатор заказов на кровельные работы'
        },
        {
          id: 6,
          title: 'Открытие Банк',
          image: require('@/assets/bank-otkrytie.jpg'),
          description: 'Мобильный интранет для банка "Открытие"'
        },
        {
          id: 7,
          title: 'Группа "ГАЗ"',
          image: require('@/assets/gaz-group.jpg'),
          description: 'Группа "ГАЗ": поддержка digital-площадок и автоматизация HR-лидогенерации'
        },
        {
          id: 8,
          title: 'КИA',
          image: require('@/assets/Kia-Logo-Transparent.jpg'),
          description: 'Система личных кабинетов для клиента и диллерских центров KIA'
        },
        {
          id: 9,
          title: 'Корпорация "Система"',
          image: require('@/assets/system.jpg'),
          description: 'Корпоративный интранет-портал и мобильное приложение для АФК «Система»'
        },
        {
          id: 10,
          title: 'КИА',
          image: require('@/assets/Kia-Logo-Transparent.jpg'),
          description: 'Чат-Бот для сайта КИА'
        },
        {
          id: 11,
          title: 'банк «Открытие»',
          image: require('@/assets/bank-opening.png'),
          description: 'Корпоративный портал для банка «Открытие» '
        },
        {
          id: 12,
          title: 'НЛМК',
          image: require('@/assets/nlmk.png'),
          description: 'Интернет-магазин слябов ПАО «НЛМК» '
        },
        {
          id: 13,
          title: 'АО «Энергосбыт Плюс»',
          image: require('@/assets/energosbyt.png'),
          description: 'Система личных кабинетов и мобильное приложение для АО «Энергосбыт Плюс»'
        },
        {
          id: 14,
          title: 'НЛМК',
          image: require('@/assets/nlmk.png'),
          description: 'Мобильное приложение для ПАО «НЛМК» '
        },
        {
          id: 15,
          title: 'КИА',
          image: require('@/assets/Kia-Logo-Transparent.jpg'),
          description: 'KIA - Дилерская платформа'
        },
        {
          id: 16,
          title: 'Ростелеком',
          image: require('@/assets/rostelekom.png'),
          description: 'Разработка, поддержка и развитие корпоративных сайтов '
        },
        {
          id: 17,
          title: 'АО «Райффайзенбанк»',
          image: require('@/assets/raff-bank.jpg'),
          description: 'Корпоративный портал АО «Райффайзенбанк» '
        },
        {
          id: 18,
          title: '«Райффайзен Лайф»',
          image: require('@/assets/raff-life.png'),
          description: 'Веб-приложение для менеджеров «Райффайзен Лайф» '
        },
        {
          id: 19,
          title: 'Правительство Российской Федерации',
          image: require('@/assets/rf.png'),
          description: 'Сайт «Аналитического центра при Правительстве Российской Федерации» '
        },
        {
          id: 20,
          title: '«Сбербанк Управление Активами»',
          image: require('@/assets/sber.png'),
          description: 'Корпоративный сайт «Сбербанк Управление Активами» '
        }
      ]
    };
  }
};
</script>

<style scoped>
.portfolio-page {
  padding: 20px;
  text-align: center;
  background-image: url('https://i.gifer.com/origin/69/694b33c31463444d3d71eec7f822c49f.gif');
  background-color: black;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 100px;
}

.portfolio-page h1 {
  color: white;
}

.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

.portfolio-item {
  position: relative;
  width: calc(20% - 5px);
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.499);
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.portfolio-item:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.portfolio-item:hover .overlay {
  opacity: 1;
}

.overlay h3 {
  margin: 0;
}

.overlay p {
  margin: 0;
}
</style>
