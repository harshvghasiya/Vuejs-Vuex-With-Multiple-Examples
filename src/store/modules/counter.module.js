export default{

    namespaced:true,
    state:{
        counters:{
            counter:0
        }
    },
    mutations:{
        INCR_COUNTER:function(state){
            state.counters.counter=state.counters.counter+1;
        },
        DEC_COUNTER:function(state){
            state.counters.counter=state.counters.counter-1;
        }
    },
    actions:{
        incrementCounter:function({commit}){
            return commit('INCR_COUNTER');
        },
        decrementCounter:function({commit}){
            return commit('DEC_COUNTER');
        },
    },
}