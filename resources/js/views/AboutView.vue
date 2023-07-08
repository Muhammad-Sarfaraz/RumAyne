<template>
  <master>
    <template v-slot:content>
      <div class="col-3">
        <section class="about">
          <div class="intro">
            <div class="intro-inner">
              <div class="text">
                <h1>About</h1>
              </div>
            </div>
          </div>
          <p>Examples are given below:</p>
        </section>

        <h3>VueX:</h3>
        <h4>Title: {{ $store.state.about.data.title }}</h4>
           <form>
            <input type="text" v-model="title">
            <button @click.prevent="setTitle(title)">Set title</button>
            <button @click.prevent="del()">Remove Title</button>
          </form>
      </div>
    </template>
  </master>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import master from './layout/master.vue';

export default {
  components: {
    master
  },
  computed: {
    ...mapState('about', ['data']),
    ...mapGetters('about', ['getTitle']),
  },

  data() {
    return {
    }
  },

  methods: {
    del() {
      this.$store.dispatch('about/deleteTitle', this.id)
    },
    ...mapMutations('about', ['setTitle']),
  },

  created() {

    // Custom Plugins...
    console.log(this.$world.execute());

    // VueX...
    this.$store.dispatch('about/getTitle')

    // // hide Loader...
    setTimeout(() => {

    }, 2000)


    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {

      }, (response) => {

      })
  }
}

</script>


