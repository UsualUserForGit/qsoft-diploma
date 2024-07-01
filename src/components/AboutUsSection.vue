<template>
    <div class="project">
        <div class="project-info" v-if="show">
            <h1>QSOFT</h1>
            <p>Первый в России digital-интегратор с экспертизой в A.I. и Machine Learning и лидер веб-разработки
                по версии ведущих рейтингов Рунета.

                В московском офисе компании трудятся более 220 специалистов. Благодаря их уникальному опыту с 2005 года
                реализуются технически сложные проекты: интернет-магазины, личные кабинеты, корпоративные порталы,
                digital workplace.

                Наша команда разработчиков имеет отличные знания специфики отрасли, поэтому всегда готова предложить
                наиболее выгодное инновационное решение. Именно поэтому нам доверяют крупнейшие банки и ритейлеры
                страны, страховые и производственные компании. В их числе такие значимые игроки как: Unilever, Газпром,
                AmoCRM, KIA, Сбербанк, МТС и др.</p>

            <div class="tech-icons">
                <i class="fab fa-html5"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-php"></i>
            </div>
            <button class="case-study-btn">узнать больше →</button>
        </div>
        <img class="project-image" src="../pics/i.webp" alt="MyFinance App" />
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.show = true;
      }, 0);
    },
  };
  </script>
  
  <style scoped>
  .project {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #eaeaea;
    color: #000000;
  }
  
  .project-info {
    max-width: 50%;
    animation: fadeInUp 1.0s ease-out forwards;
    opacity: 0;
    transform: translateY(50px);
  }
  
  .project-image {
    width: 45%;
  }
  
  .project h1 {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 20px;
  }
  
  .project p {
    font-size: 1.4rem;
    margin-bottom: 20px;
    text-align: start;
  }
  
  .tech-icons {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .tech-icons i {
    margin-right: 15px;
  }
  
  .case-study-btn {
    background-color: #D32A4D;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  .case-study-btn:hover {
    background-color: #911e35;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  