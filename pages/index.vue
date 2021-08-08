<template>
  <div id="top" v-scroll="toTop" class="main">
    <a id="toTop" v-scroll-to="'#top'" class="btn" href="#!"><i class="fas fa-angle-up" /></a>
    <div class="content-1">
      <div class="center-flex">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-7 col-md-12 col-sm-12">
              <div class="text-center text-lg-start">
                <img src="/logo.webp" class="title-img" height="240" width="240" alt="DwiiUnknown">
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
      </div>
    </div>

    <div id="about-me" class="content-2">
      <div class="blank-space4" />
      <div class="container">
        <h2 class="mb-5 fw-bold text-center">
          About Me
        </h2>
        <p class="text-center">
          Hi, my name is Satya Bagus Dwiatmaja. Im just a normal high schooler in East Java, Indonesia. I love to make good looking websites since 2018.
          <br>Here are the skills I have:
        </p>
        <div class="row justify-content-center mt-4">
          <div v-for="(item, index) in skills" :key="index" class="col-4 col-lg-2 mb-3">
            <p class="lead fw-bold text-center mb-1">
              {{ item.category }}
            </p>
            <ul class="list-unstyled text-center">
              <li v-for="(skill, skillIndex) in item.list" :key="skillIndex">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blank-space4" />
    </div>

    <div id="my-projects" class="content-3">
      <div class="blank-space4" />
      <div class="container">
        <h2 class="mb-3 fw-bold text-center">
          My Projects
        </h2>
        <p class="mb-5 text-center">
          Here is some project that i made & i have contributed.
        </p>
        <div class="row">
          <div v-for="project of projects" :key="project.slug" class="col-6 col-lg-3 col-md-4 mb-4">
            <div class="card h-100">
              <a v-if="project.link === '#'" class="btn btn-sm project-btn"><i class="fas fa-external-link-alt" /></a>
              <a v-else :href="project.link" target="_blank" rel="noreferrer" class="btn btn-sm project-btn"><i class="fas fa-external-link-alt" /></a>
              <img :src="project.img" class="card-img-top img-fluid" height="171" width="304" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title fw-bold">
                  {{ project.title }}
                </h5>
                <p class="card-text">
                  {{ project.description }}
                </p>
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
        <h2 class="mb-5 fw-bold text-center">
          Contact Me
        </h2>
        <div class="row mb-5 center">
          <div v-for="social of socials" :key="social.slug" class="col-3 col-lg-1 mb-3 center">
            <a v-if="social.link === '?'" data-bs-toggle="tooltip" data-bs-placement="auto" :title="social.title"><i :class="social.icon" /></a>
            <a v-else :href="social.link" target="_blank" rel="noreferrer"><i :class="social.icon" /></a>
          </div>
        </div>
      </div>
      <div class="blank-space4" />
    </div>

    <div class="footer py-3 text-center">
      <a href="/">Copyright © 2021 DwiiUnknown</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum metus eget odio pretium, vel commodo nisi accumsan. Nulla egestas tortor eget dui rutrum, a consectetur enim tempus. Nullam nec lorem nec odio malesuada scelerisque at eget diam. Morbi tempus mi metus, nec faucibus urna venenatis ut. Proin commodo elit non dolor condimentum porttitor. Duis ipsum est, scelerisque sit amet sem ut, eleifend venenatis nibh. Aenean cursus cursus aliquam. Donec sollicitudin erat quam, quis consectetur mauris iaculis ut. Phasellus finibus justo vitae hendrerit elementum. Pellentesque condimentum lacus at lorem scelerisque accumsan. Etiam scelerisque ipsum a sodales hendrerit. Donec pharetra augue eget sollicitudin vulputate.'

    const skills = [
      {
        category: 'Languages',
        list: ['JavaScript', 'TypeScript', 'PHP', 'SQL']
      },
      {
        category: 'Framework',
        list: ['Vue', 'Nuxt.JS', 'React', 'Next.JS', 'CodeIgniter']
      },
      {
        category: 'Frontend',
        list: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'Material Design', 'AntDesign', 'PWA']
      },
      {
        category: 'Tools & Services',
        list: ['Git', 'Figma', 'Visual Studio Code', 'Netlify', 'Vercel', 'NGINX']
      },
      {
        category: 'Operating System',
        list: ['Windows', 'Ubuntu', 'ArchLinux']
      }
    ]

    const projects = [
      {
        title: 'My Website',
        description: 'DwiiUnknown Personal Website',
        img: '/preview/dwii-lowres.webp',
        link: 'https://dwii.my.id'
      },
      {
        title: 'NGANTRIIN',
        description: 'Ngantriin merupakan aplikasi seluler yang memudahkan anda untuk memesan antrian dokter di praktek dokter baik di rumah sakit, puskesmas, maupun klinik.',
        img: '/preview/ngantriin-lowres.webp',
        link: 'https://ngantriin.com'
      },
      {
        title: 'Auron Empire',
        description: 'Auron Empire Minecraft Server | play.auronempire.com',
        img: '/preview/auron-lowres.webp',
        link: 'https://auronempire.com'
      },
      {
        title: 'Great Roleplay ID',
        description: 'Kami adalah Komunitas Game Online Yang Menceritakan Sebuah karakter Di Kota #greatindoroleplay.',
        img: '/preview/greatrp-lowres.webp',
        link: 'https://draft1-dwiiunknown.vercel.app'
      },
      {
        title: 'CluTIK SMANDA',
        description: 'Club TIK SMA Negeri 2 Kota Mojokerto.',
        img: '/preview/wip.webp',
        link: 'https://clutik.vercel.app'
      },
      {
        title: 'Auron-web-next',
        description: 'Coming Soon! Auron Empire new website.',
        img: '/preview/wip.webp',
        link: 'https://dev.auronempire.com'
      },
      {
        title: 'Sisi Timur',
        description: 'A digitally-powered, creativeliy-inspired consultancy, with create value &amp; more impact.',
        img: '/preview/sisitimur-lowres.webp',
        link: '#'
      },
      {
        title: 'WIP',
        description: 'WIP.',
        img: '/preview/wip.webp',
        link: '#'
      }
    ]
    const socials = [
      {
        title: 'Email',
        icon: 'fas fa-envelope fa-2x text-white',
        link: 'mailto:dwiiunknown@gmail.com'
      },
      {
        title: 'Discord',
        icon: 'fab fa-discord fa-2x text-white',
        link: 'https://discord.gg/hHydBjnqUn'
      },
      {
        title: 'Github',
        icon: 'fab fa-github fa-2x text-white',
        link: 'https://github.com/ItzMeDwii'
      },
      {
        title: 'Gitlab',
        icon: 'fab fa-gitlab fa-2x text-white',
        link: 'https://gitlab.com/ItzMeDwii'
      },
      {
        title: 'Linkedin',
        icon: 'fab fa-linkedin fa-2x text-white',
        link: 'https://www.linkedin.com/in/satya-bagus-dwiatmaja/'
      },
      {
        title: 'Dev.to',
        icon: 'fab fa-dev fa-2x text-white',
        link: 'https://dev.to/itzmedwii'
      },
      {
        title: 'Facebook',
        icon: 'fab fa-facebook fa-2x text-white',
        link: 'https://fb.com/dwii5359'
      },
      {
        title: 'Twitter',
        icon: 'fab fa-twitter fa-2x text-white',
        link: 'https://twitter.com/Dwii5359'
      },
      {
        title: 'Instagram',
        icon: 'fab fa-instagram fa-2x text-white',
        link: 'https://www.instagram.com/dwii5359'
      },
      {
        title: 'Reddit',
        icon: 'fab fa-reddit fa-2x text-white',
        link: 'https://www.reddit.com/user/Dwii5359'
      }
    ]
    return { lipsum, skills, projects, socials }
  },
  mounted () {
    const bootstrap = require('bootstrap')
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // eslint-disable-next-line no-unused-vars
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
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
