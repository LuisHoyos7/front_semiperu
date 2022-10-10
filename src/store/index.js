import { createStore } from 'vuex';
import axios from "axios";
axios.defaults.withCredentials = true;
const baseURL = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default createStore({
    state: {
        user: null,
        auth: false
    },
    getters: {},
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.auth = Boolean(user);
        }
    },
    actions: {
        async logout({ dispatch }) {
            await axios.post(`${baseURL}/logout`);
            return dispatch("getUser");
        },
        async login({ dispatch }, credentials) {
            await axios.get(`${baseURL}/sanctum/csrf-cookie`);
            await axios.post(`${baseURL}/login`, credentials);
            return dispatch("getUser");
        },
        getUser({ commit }) {
            axios.get(`${baseURL}/api/user`)
                .then(res => {
                    commit("SET_USER", res.data);
                    console.log(res.data);
                }).catch(() => {
                    commit("SET_USER", null);
                    console.log("cerrada sesion");
                });
        }
    },
    modules: {}
})