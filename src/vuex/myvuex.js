import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})


let state = {
    initialSlide:1,
    hideScroll:false,
    scrollPosition:"",
    qq:'',
    password:''
};

const mutations={
    setInitialSlide(state,data){
        state.initialSlide = data;
    },
    sethideScroll(state,data){
        state.hideScroll = data;
    },
    setLogin(state,data){
        state.qq = data.qq;
        state.password = data.password;
    }
}

export default new Vuex.Store({
    state,mutations,
  plugins: [vuexLocal.plugin]
});