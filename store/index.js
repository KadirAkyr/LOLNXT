export const state = () => ({
  summoner: {},
  champions: [],
  apiKey: "RGAPI-c9020cc1-ce08-43f5-9576-22230a43cce0"
})

export const getters = {
  getSummoner(state) {
    return state.summoner
  },
  getChampions(state) {
    return state.champions
  }
}

export const mutations = {
  setSummoner(state, payload) {
    state.summoner = payload
  },
  setChampions(state, payload) {
    state.champions = payload
  }
}

export const actions = {
  async loadChampions({
    commit
  }) {
    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.1.1/data/en_US/champion.json"
    )
    const champions = await response.json()
    commit('setChampions', champions.data)
  },
  async searchSummoner({
    state,
    commit
  }, payload) {
    try {
      const search = payload[payload.type];
      const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-${payload.type}/${search}?api_key=${state.apiKey}`);
      const summoner = await response.json();
      commit('setSummoner', summoner)
      return true
    } catch (error) {
      return false
    }
  },
  searchSummonerByName({
    dispatch
  }, name) {
    return dispatch('searchSummoner', {
      type: 'name',
      name
    })
  },
  async getMasteries({
    state
  }) {
    try {
      const response = await fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${state.summoner.id}?api_key=${state.apiKey}`);
      const masteries = await response.json();
      return masteries
    } catch (error) {
      return []
    }
  }
}
