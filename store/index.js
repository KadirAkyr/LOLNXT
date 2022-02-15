export const state = () => ({
  summoner: {},
  champions: [],
  games: [],
  apiKey: "RGAPI-f1393dea-af56-4636-9b3d-c37719252631"
})

export const getters = {
  getSummoner(state) {
    return state.summoner
  },
  getChampions(state) {
    return state.champions
  },
  getGames(state) {
    return state.games
  }
}

export const mutations = {
  setSummoner(state, payload) {
    state.summoner = payload
  },
  setChampions(state, payload) {
    state.champions = payload
  },
  setGames(state, payload) {
    state.games = payload
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
  },
  async loadGames({
    state,
  }) {
    const gamesNumber = 7
    try {
      const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${state.summoner.puuid}/ids?start=0&count=${gamesNumber}&api_key=${state.apiKey}`)
      const games = await response.json()
      return games
    } catch (error) {
      return false
    }
  },
  async loadGame({
    state
  }, matchId) {
    console.log('load Game');
    console.log(matchId);
    try {
      const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${state.apiKey}`)
      const game = await response.json()
      console.log('Done ! ' + game);
      return game
    } catch (error) {
      return false
    }
  }
}
