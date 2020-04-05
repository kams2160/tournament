import { Games } from '~/config/Games';
import { fetchData } from '~/services/Data';
import { InputData } from '~/models/InputData';

import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  singleElimination: <InputData[]>[],
  doubleElimination: <InputData[]>[],
  doubleEliminationFinals: <InputData[]>[],
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  singleElimination: state => state.singleElimination,
  doubleElimination: state => state.doubleElimination,
  doubleEliminationFinals: state => state.doubleEliminationFinals,
};

export const mutations: MutationTree<RootState> = {
  SET_DATA: (state, inputData: InputData[]) => {
    inputData.forEach(item => {
      if (item.type === Games.SingleElimination) { state.singleElimination.push(item) }
      else if (item.type === Games.DoubleElimination) { state.doubleElimination.push(item) }
      else if (item.type === Games.DoubleEliminationFinals) { state.doubleEliminationFinals.push(item) }
    })
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const inputData: InputData[] = await Promise.all(fetchData());
    commit('SET_DATA', inputData);
  }
};