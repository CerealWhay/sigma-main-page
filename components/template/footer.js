
const socialModal = {
    props: {
        modalData: {type: Object, required: true},
        isModalOpen: {type: Boolean, required: true},
    },
    // language=Vue
    template: `

      <redesign-modal-wrapper
          :is-open="isModalOpen"
          @close="$emit('close')"
      >
        <div class="footer-modal">
          <div class="footer-modal__title">
            {{ modalData.title }}
          </div>
          <div v-if="modalData.qrSrc"
               class="footer-modal__qr"
          >
            <img :src="modalData.qrSrc"
                 alt=""
                 class="footer-modal__qr-img"
            >
          </div>
          <a :href="modalData.link"
             class="footer-modal__link r-text-link r-text-link--big"
             target="_blank"
          >
            Перейти по ссылке
          </a>
        </div>
      </redesign-modal-wrapper>
    
    `,
}

const sigmaMainFooter = {
    components: {
        'social-modal': socialModal,
    },
    props: {
        siteTemplatePath: {type: String, required: true},
    },
    data: () => ({
        isModalOpen: false,
        modalDataType: "",
    }),
    computed: {
        mainLogoSrc() {
            return `${this.siteTemplatePath}/media/main-logo.svg`
        },
        socialsTypes() {
            return {
                'vk': {
                    title: "Присоединяйся к нам в ВК!",
                    qrSrc: `${this.siteTemplatePath}/media/footer/qr-vk.svg`,
                    link: "https://vk.com/sigmateamit",
                },
                'tg': {
                    title: "Канал о событиях СИГМЫ в Telegram",
                    qrSrc: `${this.siteTemplatePath}/media/footer/qr-tg.svg`,
                    link: "https://t.me/+JYVmDv4BQnI2NGRi",
                },
                'habr': {
                    title: "У нас есть блог на Хабре!",
                    qrSrc: `${this.siteTemplatePath}/media/footer/qr-habr.svg`,
                    link: "https://habr.com/ru/company/sigma/blog/",
                },
                '': {
                    title: "",
                    qrSrc: ``,
                    link: "",
                },
            }
        },
    },
    methods: {
        openModal(type) {
            this.modalDataType = type;
            this.isModalOpen = true;
        }
    },
    // language=Vue
    template: `

      <footer class="r-footer">
        
        <social-modal 
            :is-modal-open="isModalOpen"
            :modal-data="socialsTypes[modalDataType]"
            @close="isModalOpen = false"
        />
        
        <div class="r-container footer__wrapper">
          <div class="footer__main">
            <div class="footer__emails">
              <a href="/" class="footer__logo">
                <img :src="mainLogoSrc"
                     alt="main-logo"
                     class="footer__logo-img"
                >
              </a>
              <div class="footer__emails-wrapper">

                <a href="mailto:pr@sigma-it.ru" class="footer__email r-text-link r-text-link--arrow r-text-link--big">
                  Предложить новость
                </a>
                <a href="mailto:support@sigma-it.ru" class="footer__email r-text-link r-text-link--arrow r-text-link--big">
                  Техподдержка
                </a>
                <a href="mailto:pr@sigma-it.ru" class="footer__email r-text-link r-text-link--arrow r-text-link--big">
                  Предложить идею
                </a>

              </div>
            </div>
            <div class="footer__links">
              <div class="footer__subtitle">
                Важные ссылки
              </div>
              <div class="footer__links-wrapper">

                <a href="/new-employee/" class="footer__link r-text-link r-text-link--border r-text-link--big">
                  Гид по СИГМЕ
                </a>
                <a href="/documents/" class="footer__link r-text-link r-text-link--border r-text-link--big">
                  Документы
                </a>
                <a href="/corporate-resources/" class="footer__link r-text-link r-text-link--border r-text-link--big">
                  Корпоративные ресурсы
                </a>
                <a href="/new-employee/?section_id=4083" class="footer__link r-text-link r-text-link--border r-text-link--big">
                  Приведи друга
                </a>
                <a href="/education/my_courses/my.php" class="footer__link r-text-link r-text-link--border r-text-link--big">
                  Обучение
                </a>
                <a href="/new-employee/?section_id=5087" class="footer__link r-text-link r-text-link--border r-text-link--big">
                  Библиотека
                </a>

              </div>
            </div>
          </div>
          <div class="footer__socials">
            <div class="footer__subtitle">
              Мы в соцсетях
            </div>
            <div class="footer__socials-wrapper">
              <div class="footer__social footer__tg"
                   @click="openModal('tg')"
              ></div>
              <div class="footer__social footer__vk"
                   @click="openModal('vk')"
              ></div>
              <div class="footer__social footer__habr"
                   @click="openModal('habr')"
              ></div>
            </div>
          </div>
        </div>
      </footer>

    `
}