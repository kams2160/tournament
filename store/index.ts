import { fetchData } from '~/services/Data';
import { InputData } from '~/models/InputData';

import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  brackets: <InputData>{}
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  brackets: state => state.brackets
};

export const mutations: MutationTree<RootState> = {
  SET_DATA: (state, inputData: InputData) => (state.brackets = inputData)
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const inputData: InputData = await fetchData();
    commit('SET_DATA', inputData);
  }
};