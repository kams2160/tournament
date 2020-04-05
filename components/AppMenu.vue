<template>
  <div>
    <div class="menu">
      <nuxt-link
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
        :to="item.url + '?id=1'"
        :class="{ active: selectedItem === item.url }"
      >{{ item.name }}</nuxt-link>
    </div>
    <div class="submenu">
      <nuxt-link
        class="menu-item"
        :to="'?id=' + i"
        v-for="i in bracketsCount"
        :key="i"
        :class="{ active: selectedGame === i }"
      >{{i}}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BracketsWrapper } from '~/models/BracketsWrapper'
import AppBracket from '~/components/AppBracket.vue'
import { Match } from '~/models/Match'
import { InputData } from '~/models/InputData'
import { MenuItem } from '~/models/MenuItem'

export default Vue.extend({
  props: {
    bracketsCount: Number,
    selectedGame: Number,
    selectedItem: String,
    menuItems: Array as () => MenuItem[]
  }
})
</script>

<style lang="scss" scoped>
.menu {
  display: flex;

  &-item {
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    font-size: 16px;
    background: #2b2b2b;
    border: 1px solid #707070;
    margin: 0 15px 20px;
  }

  .active {
    border-color: #ff6000;
    color: #ff6000;
  }
}

.submenu {
  display: flex;
  justify-content: center;

  &-item {
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    font-size: 16px;
    background: #2b2b2b;
    border: 1px solid #707070;
    margin: 0 15px 20px;
  }

  .active {
    border-color: #ff6000;
    color: #ff6000;
  }
}
</style>