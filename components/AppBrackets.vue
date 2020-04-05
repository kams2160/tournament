<template>
  <div>
    <div class="wrapper">
      <AppBracket v-if="inputData.brackets.upper" :matches="inputData.brackets.upper.bracketTops" />
      <div class="round" v-if="inputData.brackets.lower">
        <p class="round-title">Second round</p>
        <AppBracket :matches="inputData.brackets.lower.bracketTops" />
      </div>
      <div class="round" v-if="inputData.brackets.final">
        <p class="round-title">Final round</p>
        <AppBracket :matches="inputData.brackets.final.bracketTops" />
      </div>
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

  .round {
    margin-top: 30px;
    border: 2px dashed #ff6000;
    border-width: 2px 0 0 0;
    padding-top: 20px;

    &-title {
      margin: 10px;
    }
  }
}
</style>