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
            <div class="list-inline text-center text-lg-start text-md-start">
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
          {{ lipsum }}
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
        <p>
          {{ lipsum }}
        </p>
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

    return { lipsum }
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
