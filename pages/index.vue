<template>
  <div class="container">
    <AppBrackets :brackets="brackets" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputData } from '~/models/InputData'
import AppBrackets from '~/components/AppBrackets.vue'
import { BracketsWrapper } from '../models/BracketsWrapper'

export default Vue.extend({
  components: {
    AppBrackets
  },
  computed: {
    brackets() {
      const brackets = this.$store.getters['brackets'] as BracketsWrapper

      return brackets
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #000000;
}
</style>
