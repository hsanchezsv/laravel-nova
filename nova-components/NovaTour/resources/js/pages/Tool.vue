<template>
  <div>
    <Head title="Nova Tour" />

    <!-- <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div> -->
    <a href="#" @click="this.$tours['myTour'].start()" class="docs-logo" id="v-step-0">
              
              <h2>INIT VUE TOUR</h2>
            </a>
    <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
    <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>
    <div class="v-step-3">Nuevo paso</div>

    <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>

  </div>
</template>

<script>
import { createApp, getCurrentInstance } from 'vue'
import Vue3Tour from 'vue3-tour'
import { onMounted } from 'vue'

import 'vue3-tour/dist/vue3-tour.css'

const app = Vue.createApp({})
app.use(Vue3Tour)
app.mount('#app')

export default {
    name: 'my-tour',
    data () {
      return {
        myOptions: {
          useKeyboardNavigation: false,
          labels: {
            buttonSkip: 'Skip tour',
            buttonPrevious: 'Previous',
            buttonNext: 'Next',
            buttonStop: 'Finish'
          }
        },
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            header: {
              title: 'Get Started',
            },
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: '.v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '[data-v-step="2"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            }
          },
          {
            target: '.v-step-3',
            content: 'An awesome plugin made with Vue.js!'
          },
        ]
      }
    },
    mounted: function () {
      Nova.success(this.__('Nova tool mounted...'));
      this.$tours['myTour'].start()      
    }
  }

  
</script>

<style>
/* Scoped Styles */
</style>
