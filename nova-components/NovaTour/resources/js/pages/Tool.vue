<template>
    <div class="">
        <div class="steps">
            <div id="step1" data-title="1" data-intro="Paso 1">
                <img alt="Image alt text" title="Logo Title Text 1" />
            </div>
            <div id="step2" data-title="2" data-intro="Paso 2">
                <img alt="Image alt text" title="Logo Title Text 1" />
            </div>
            <div id="step3" data-title="3" data-intro="Paso 3">
                <h4>Quaco Lighthouse</h4>
                <small>
                    The Quaco Head Lighthouse is a well maintained lighthouse close to St.
                    Martins. It is a short, beautiful walk to the lighthouse along the
                    seashore.
                </small>
            </div>
        </div>
    </div>
</template>

<script>
import introJs from 'intro.js'
require('../../css/introjs.css');
import Vue from 'vue'
const introJS = introJs
export default {
    data() {
        return {
            initialLoading: false,
            loading: false
        }
    },
    mounted() {
        introJs(".steps").setOptions({
            showProgress: true,
            steps: [{
                element: document.querySelector("div[dusk='global-search-component']"),
                title: 'Welcome',
                intro: 'Hello World! 👋'
            },
            {
                element: document.querySelector('button[aria-label="Toggle Sidebar"]'),
                intro: 'This step focuses on an image'
            },
            {
                title: 'Farewell!',
                element: document.querySelector('#step3'),
                intro: 'And this is our final step!'
            }]

        }).start();
    }

}
</script>
