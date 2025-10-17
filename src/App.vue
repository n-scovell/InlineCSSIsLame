<template>
  <div>
    <component n8style :is='c.obj' v-for="(c,index) in myObjects" :key="index+'_com'"  :id="c.id">{{c.txt}}</component>
  </div>
</template>
<script>
import mixins from './data.js'
export default {
  mixins: [mixins],
  name: 'App',
  data() {
    return {
      tester:'heynow',
      myObjects: [
        {
          txt:'A',
          cls:'clsA',
          id:'idA',
          obj:'p',
          style:`background-color:red;color:white;margin:0px;`
        },
        {
          txt:'B',
          cls:'clsB',
          id:'idB',
          obj:'p',
          style:`color:red;margin:0px;`
        },
        {
          txt:'C',
          cls:'clsC',
          id:'idC',
          obj:'p',
          style:`padding:10px 10px; background-color:blue; color: yellow;margin:0px;`
        },

      ]
    }
  },
  methods: {
  },
  mounted() {
    this.thisIsWorking(this.myObjects)
  }
}
</script>
