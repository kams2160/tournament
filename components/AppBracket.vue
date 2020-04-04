<template>
  <div>
    <div v-for="(match, index) in matches" :key="index" class="item">
      <div :class="{'item-parent': isParentNode(match)}">
        <AppNode :upperPart="match.upperPart" :lowerPart="match.lowerPart" :winner="match.winner" />
      </div>
      <div v-if="isParentNode(match)" class="item-childrens">
        <div v-if="match.firstChild" class="item-child">
          <AppBracket :matches="[match.firstChild]" />
        </div>
        <div v-if="match.secondChild" class="item-child">
          <AppBracket :matches="[match.secondChild]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BracketsWrapper } from '~/models/BracketsWrapper'
import { Match } from '~/models/Match'
import AppNode from '~/components/AppNode.vue'

export default Vue.extend({
  name: 'AppBracket',
  components: {
    AppNode
  },
  props: {
    matches: Array as () => Match[]
  },
  methods: {
    isParentNode(match: Match): boolean {
      return !!(match.firstChild || match.secondChild)
    }
  }
})
</script>

<style lang="scss" scoped>
$side-margin: 50px;
$vertical-margin: 10px;

.item {
  display: flex;
  flex-direction: row-reverse;

  &-parent {
    position: relative;
    margin-left: $side-margin;
    display: flex;
    align-items: center;
    &:after {
      position: absolute;
      content: '';
      width: $side-margin/2;
      height: 2px;
      left: 0;
      top: 50%;
      background-color: #ff6000;
      transform: translateX(-100%);
    }
  }
  &-childrens {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item-child {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      margin-top: $vertical-margin;
      margin-bottom: $vertical-margin;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background-color: #ff6000;
        right: 0;
        top: 50%;
        transform: translateX(100%);
        width: 25px;
        height: 2px;
      }
      &:after {
        content: '';
        position: absolute;
        background-color: #ff6000;
        right: -$side-margin / 2;
        height: calc(50% + 22px);
        width: 2px;
        top: 50%;
      }
      &:last-child {
        &:after {
          transform: translateY(-100%);
        }
      }
      &:only-child:after {
        display: none;
      }
    }
  }
}
</style>