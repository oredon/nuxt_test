import * as types from '~/mtypes/testvuex';

export const state = () => ({
  counter: 0
});

export const mutations = {
  /**
   * カウンターの値を変更
   * @param  {Object} state state
   * @param  {Object} num   差し替え値
   */
  [types.CHANGE_COUNTER]: function(state, num){
    state.counter += num;
  },
  /**
   * カウンターの値をリセット
   * @param  {Object} state state
   */
  [types.RESET_COUNTER]: function(state, num){
    state.counter = 0;
  },
};

export const actions = {
  /**
   * カウンターの値を変更するアクション
   * @param  {Object}     Vuexオブジェクト
   * @param  {String} num 基準値
   */
  changeCounter: ({commit}, num) => {
    commit(types.CHANGE_COUNTER, num);
  },
  /**
   * カウンターの値をリセットするアクション
   * @param  {Object}     Vuexオブジェクト
   */
  resetCounter: ({commit}) => {
    commit(types.RESET_COUNTER);
  },
}
