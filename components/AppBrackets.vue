<template>
  <div>
    <div class="wrapper">
      <AppBracket v-if="inputData.brackets.upper" :matches="inputData.brackets.upper.bracketTops" />
      <AppBracket v-if="inputData.brackets.lower" :matches="inputData.brackets.lower.bracketTops" />
      <AppBracket v-if="inputData.brackets.final" :matches="inputData.brackets.final.bracketTops" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BracketsWrapper } from '~/models/BracketsWrapper'
import AppBracket from '~/components/AppBracket.vue'
import { Match } from '~/models/Match'
import { InputData } from '~/models/InputData'

export default Vue.extend({
  components: {
    AppBracket
  },
  props: {
    inputData: Object as () => InputData
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>