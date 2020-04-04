<template>
  <div class="item-container">
    <div class="item-container--info">
      <span class="name">{{ player.player }}</span>
      <span class="description">{{ player.desc }}</span>
    </div>
    <span class="counter">{{ player.points || 0 }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MatchPlayer } from '~/models/MatchPlayer'

export default Vue.extend({
  props: {
    player: Object as () => MatchPlayer
  }
})
</script>

<style lang="scss" scoped>
$side-margin: 50px;
$vertical-margin: 10px;

.item-container {
  display: flex;
  height: 34px;
  justify-content: space-between;

  &:after {
    content: '';
    width: 10px;
    height: 34px;
    background: #707070;
    position: absolute;
    right: 0;
  }

  &--info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    padding-left: 6px;

    .name {
      text-align: left;
      color: #ffffff;
      font-size: 12px;
    }

    .description {
      color: #9f9f9f;
      font-size: 9px;
    }
  }

  .counter {
    color: #ffffff;
    font-size: 12px;
    text-align: right;
    padding-right: 16px;
    align-self: center;
  }
}
</style>