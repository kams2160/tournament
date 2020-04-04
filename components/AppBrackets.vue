<template>
  <div>
    <div class="wrapper">
      <AppBracket :matches="matches" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BracketsWrapper } from '~/models/BracketsWrapper'
import AppBracket from '~/components/AppBracket.vue'
import { Match } from '~/models/Match'

export default Vue.extend({
  components: {
    AppBracket
  },
  props: {
    brackets: Object as () => BracketsWrapper
  },
  computed: {
    matches(): Match[] {
      return this.brackets.upper.bracketTops
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
</style>