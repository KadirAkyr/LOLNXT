export const state = () => ({
    summoner: {},
    champions: [],
    apiKey : "RGAPI-e2132e24-895b-4830-bfc6-730525f5138c"
  })
  
export const getters = {
    getSummoner(state){
        return state.summoner
    },
    getChampions(state){
        return state.champions
    }
}

export const mutations = {
    setSummoner(state, payload){
        state.summoner = payload
    },
    setChampions(state, payload){
        state.champions = payload
    }
}
