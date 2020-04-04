<template>
  <div class="node-container">
    <div v-if="upperPart" class="node-container-player upper" :class="{ active: isUpperWinner }">
      <AppMatchPlayer :player="upperPart" />
    </div>
    <div class="node-container-separator"></div>
    <div v-if="lowerPart" class="node-container-player lower" :class="{ active: !isUpperWinner }">
      <AppMatchPlayer :player="lowerPart" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MatchPlayer } from '~/models/MatchPlayer'
import AppMatchPlayer from '~/components/AppMatchPlayer.vue'

export default Vue.extend({
  props: {
    upperPart: Object as () => MatchPlayer,
    lowerPart: Object as () => MatchPlayer,
    winner: String
  },
  computed: {
    isUpperWinner(): boolean {
      return this.winner === 'upper'
    }
  },
  components: {
    AppMatchPlayer
  }
})
</script>

<style lang="scss" scoped>
$side-margin: 50px;
$vertical-margin: 10px;

.node-container {
  width: 210px;

  &-player {
    height: 36px;
    background: #2b2b2b;
    border-color: #707070;
    border-style: solid;
  }

  &-separator {
    height: 2px;
    background: #ff6000;
    width: 100%;
  }

  .upper {
    border-width: 2px 2px 0 2px;
  }

  .lower {
    border-width: 0 2px 2px 2px;
  }

  .active {
    border-color: #ff6000;

    .item-container {
      &:after {
        background: #ff6000;
      }
    }
  }
}
</style>