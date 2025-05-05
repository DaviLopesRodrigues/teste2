/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

// scrollReveal.reveal(
//   `#home .image, #home .text,
//   #about .image, #about .text,
//   #services header, #services .card,
//   #testimonials header, #testimonials .testimonials
//   #contact .text, #contact .links,
//   footer .brand, footer .social
//   `,
//   { interval: 100 }
// )

scrollReveal.reveal(
  `#home-aqt .image, #home-aqt .text,
  #passeio .image, #passeio .text,
  #equipe-1 .image, #equipe-1 .text,
  #about .image, #about .text,
  #memorial header, #memorial .card,
  #projetos header, #projetos .card,
  #arquitetonicos header, #arquitetonicos .card,
  #complementares header, #complementares .card,
  #estruturais header, #estruturais .card,
  #externo header, #externo .externo-card
  #interno header, #interno .interno-card
  #equipe-1 header, #equipe-2 .card,
  #contact-aqt .text, #contact-aqt .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
// const backToTopButton = document.querySelector('.back-to-top')

// function backToTop() {
//   if (window.scrollY >= 560) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// }

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  // backToTop()
  activateMenuAtCurrentSection()
})

const houseInfos = document.getElementById("house-info");

houseInfos.addEventListener("click", () => {
  Swal.fire({
    width: "40rem",
    title: "Residência 2 Pavimentos (228,66m²)",
    html: `
    <div style="display:flex; align-items: start; justify-content: center; gap: 1rem; color: #545454;">

    <div style="text-align: start; ">

    <h3 style="text-align:start;">Térreo</h3>
      <ul>
        <li style="color: #545454;" class="item-list">2 Vagas de Garagem</li>
        <li style="color: #545454;" class="item-list">Banheiro Social</li>
        <li style="color: #545454;" class="item-list">Sala de Estar</li>
        <li style="color: #545454;" class="item-list">Sala de Jantar</li>
        <li style="color: #545454;" class="item-list">Cozinha Integrada</li>
        <li style="color: #545454;" class="item-list">Área Gourmet</li>
        <li style="color: #545454;" class="item-list">Área de Serviço</li>
        <li style="color: #545454;" class="item-list">Banheiro de Serviço</li>
        <li style="color: #545454;" class="item-list">Piscina</li>
      </ul>

      </div>

      <div style="text-align: start;">

      <h3 style="text-align:start">Superior</h3>
      <ul>
        <li style="color: #545454;" class="item-list">Suíte Master com Closet e Varanda</li>
        <li style="color: #545454;" class="item-list">1 Quarto</li>
      </ul>

       </div>

      </div>
    `,
    confirmButtonText: "Voltar",
    confirmButtonColor: "#222B35"
  });
})