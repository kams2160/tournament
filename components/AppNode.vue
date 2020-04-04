<template>
  <div class="node-container">
    <div class="node-container-player upper active">
      <div class="item-container">
        <div class="item-container--info">
          <span class="name">Bella Kuvalis</span>
          <span class="description">reprehenderit</span>
        </div>
        <span class="counter">2</span>
      </div>
    </div>
    <div class="node-container-separator"></div>
    <div class="node-container-player lower">
      <div class="item-container">
        <div class="item-container--info">
          <span class="name">Bella Kuvalis</span>
          <span class="description">reprehenderit</span>
        </div>
        <span class="counter">1</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MatchPlayer } from '~/models/MatchPlayer'

export default Vue.extend({
  props: {
    upperPart: Object as () => MatchPlayer,
    lowerPart: Object as () => MatchPlayer
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