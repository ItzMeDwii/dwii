<template>
  <div id="top" v-scroll="toTop" class="main">
    <a id="toTop" v-scroll-to="'#top'" class="btn" href="#!"><i class="fas fa-angle-up" /></a>
    <div class="content-1">
      <div class="blank-space3" />
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 col-md-12 col-sm-12">
            <div class="text-center text-lg-start">
              <img src="/icon.png" class="title-img" height="240" width="240" alt="DwiiUnknown">
            </div>
            <div class="blank-space6" />
            <h1 class="mb-3 fw-bold text-center text-lg-start">
              Hi! Im DwiiUnknown
            </h1>
            <p class="lead mb-4 text-center text-lg-start">
              My name is Satya Bagus Dwiatmaja. Im Frontend Web Developer, love to make nice websites and discord bots.
            </p>
            <div class="list-inline text-center text-lg-start">
              <div class="list-inline-item mb-2">
                <a v-scroll-to="'#about-me'" class="btn" href="#!">About Me</a>
              </div>
              <div class="list-inline-item mb-2">
                <a v-scroll-to="'#my-projects'" class="btn" href="#!">My Projects</a>
              </div>
              <div class="list-inline-item mb-2">
                <a v-scroll-to="'#contact-me'" class="btn" href="#!">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blank-space3" />
    </div>

    <div id="about-me" class="content-2">
      <div class="blank-space4" />
      <div class="container">
        <h2 class="mb-3">
          About Me
        </h2>
        <p>
          My name is Satya Bagus Dwiatmaja, Im 16 years old. Now im a High School Student. I live in East Java, Indonesia.<br>
          I can make website using Nuxt.js (Vue.js Framework).<br>
          I already making websites since 2018, i also making discord bots using JavaScript.<br>
          <br>
          What else I can do:<br>
          HTML, CSS, PHP, JavaScript, TypeScript, React, NGINX, System Administration (Linux) and a little bit of UI/UX.
        </p>
      </div>
      <div class="blank-space4" />
    </div>

    <div id="my-projects" class="content-3">
      <div class="blank-space4" />
      <div class="container">
        <h2 class="mb-3">
          My Projects
        </h2>
        <p class="mb-3">
          Here is some project that i made & i have contributed.
        </p>
        <div class="row">
          <div v-for="project of projects" :key="project.slug" class="col-6 col-lg-3 col-md-4 mb-4">
            <div class="card">
              <img :src="project.img" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title fw-bold">
                  {{ project.title }}
                </h5>
                <p class="card-text">
                  {{ project.description }}
                </p>
                <a :href="project.link" class="btn">Visit Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="blank-space4" />
    </div>

    <div id="contact-me" class="content-4">
      <div class="blank-space4" />
      <div class="container">
        <h2 class="mb-3">
          Contact Me
        </h2>
        <p>
          {{ lipsum }}
        </p>
      </div>
      <div class="blank-space4" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum metus eget odio pretium, vel commodo nisi accumsan. Nulla egestas tortor eget dui rutrum, a consectetur enim tempus. Nullam nec lorem nec odio malesuada scelerisque at eget diam. Morbi tempus mi metus, nec faucibus urna venenatis ut. Proin commodo elit non dolor condimentum porttitor. Duis ipsum est, scelerisque sit amet sem ut, eleifend venenatis nibh. Aenean cursus cursus aliquam. Donec sollicitudin erat quam, quis consectetur mauris iaculis ut. Phasellus finibus justo vitae hendrerit elementum. Pellentesque condimentum lacus at lorem scelerisque accumsan. Etiam scelerisque ipsum a sodales hendrerit. Donec pharetra augue eget sollicitudin vulputate.'
    const projects = [
      {
        id: '0',
        title: 'My Website',
        description: 'Nuxt.js',
        img: '/preview/dwii.png',
        link: 'https://dwii.my.id'
      },
      {
        id: '1',
        title: 'NGANTRIIN',
        description: 'Nuxt.js',
        img: '/preview/ngantriin.png',
        link: 'https://ngantriin.com'
      },
      {
        id: '2',
        title: 'Auron Empire',
        description: 'Nuxt.js',
        img: '/preview/auron.png',
        link: 'https://auronempire.com'
      },
      {
        id: '3',
        title: 'Animania.gg',
        description: 'Nuxt.js',
        img: '/preview/animania.png',
        link: 'https:/animania.gg'
      }
    ]
    return { lipsum, projects }
  },
  methods: {
    toTop () {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      const nav = document.getElementById('toTop')
      if (scrollPosition >= 240) {
        nav.style.display = 'block'
      } else {
        nav.style.display = 'none'
      }
    }
  }
}
</script>
