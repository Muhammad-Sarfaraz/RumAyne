<template>
  <master>
    <template v-slot:content>
      <div class="col-3">
        <section class="about">
          <div class="intro">
            <div class="intro-inner">
              <div class="text">
                <h1>Aura Vue</h1>
              </div>
            </div>
          </div>
          <p>Aura Vue, is a boilerplate for Vue js.</p>
        </section>
        <a target="_blank" href="https://vuex.vuejs.org/">
          <section class="project">
            <div class="project-icon">
              <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4">
            </div>
            <div class="project-description">
              <h1>VueX</h1>
              <h2>🎉 Vuex is a state management pattern + library for Vue.js applications. </h2>
              <p class="p-sm"></p>
            </div>
          </section>
        </a>
        <a target="_blank" href="https://vue3-toastify.js-bridge.com/">
          <section class="project">
            <div class="project-icon">
              <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4">
            </div>
            <div class="project-description">
              <h1>Vue Toastr</h1>
              <h2>📝 Allows you to add toast to your app with ease.</h2>
              <p class="p-sm"></p>
            </div>
          </section>
        </a>
        <a target="_blank" href="https://github.com/hilongjw/vue-progressbar">
          <section class="project">
            <div class="project-icon">
              <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4">
            </div>
            <div class="project-description">
              <h1>Vue Progressbar</h1>
              <h2>♻️ A lightweight progress bar for vue.</h2>
              <p class="p-sm"></p>
            </div>
          </section>
        </a>
        <a target="_blank" href="https://ankurk91.github.io/vue-loading-overlay/">
          <section class="project">
            <div class="project-icon">
              <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4">
            </div>
            <div class="project-description">
              <h1>Vue Loader</h1>
              <h2>🌀 Vue.js component for full screen loading indicator </h2>
              <p class="p-sm"></p>
            </div>
          </section>
        </a>
      </div>
    </template>
  </master>
</template>

<script>

import master from './layout/master.vue';

export default {
  components: {
    master
  }
}

</script>
