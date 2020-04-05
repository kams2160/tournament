<template>
  <div class="container">
    <AppMenu
      :bracketsCount="brackets.length"
      :selectedGame="selectedGame"
      :menuItems="menuItems"
      :selectedItem="$route.params.game"
    />
    <AppBrackets :inputData="brackets[this.selectedGame-1]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputData } from '~/models/InputData'
import { MenuItem } from '~/models/MenuItem'
import { mapParams } from '~/services/ParamsMapper'
import { config } from '~/config/Config'
import AppBrackets from '~/components/AppBrackets.vue'
import AppMenu from '~/components/AppMenu.vue'

export default Vue.extend({
  components: {
    AppBrackets,
    AppMenu
  },
  computed: {
    brackets(): InputData[] {
      return this.$store.getters[this.selectedGameType]
    },
    selectedGameType(): string {
      return mapParams(this.$route.params.game)
    },
    selectedGame(): number {
      const id = +this.$route.query.id
      return !id || id < 0 || id > this.brackets.length ? 1 : id
    },
    menuItems(): MenuItem[] {
      return config.menuItems
    }
  }
})
</script>

<style>
.container {
  margin: 30px auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
</style>
