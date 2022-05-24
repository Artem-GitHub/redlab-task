import data from '@/db/data.js'

export const state = () => ({
  ...data
})

export const mutations = {}

export const actions = {}

export const getters = {
  benefits (state) {
    return state.benefits
  },
  cleaningTypes (state) {
    return state.cleaningTypes
  }
}
