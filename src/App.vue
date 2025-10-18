<template>
  <div>
    <div v-bind:n8style="spec" >
      WOWZERSssss
    </div>
    <div v-bind:n8style="spec" >
      COOL
    </div>
  </div>
</template>
<script>
import mixins from './data.js'
export default {
  mixins: [mixins],
  name: 'App',
  data() {
    return {
      spec:`padding:110px; color:red; background:yellow; margin:20px;`
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
