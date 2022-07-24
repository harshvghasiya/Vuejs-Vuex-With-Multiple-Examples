export default{
    namespaced:true,
    state:{
        employees:{
            records:[
                {
                    "id":"1",
                    "name":"harwh",
                    "email":"harsh@dfg.ff",
                    isdata:false

                },
                {
                    "id":"2",
                    "name":"harwrrdh",
                    "email":"harsh@dfg.ff",
                    isdata:false

                },
                {
                    "id":"3",
                    "name":"dfsdharwh",
                    "email":"harsh@dfg.ff",
                    isdata:false

                },
                {
                    "id":"4",
                    "name":"hhgjhgjharwh",
                    "email":"harsh@dfg.ff",
                    isdata:false

                }
            ]
        }
    },
    mutations:{
        CHECK_UNCHECK:function(state,playload){
            state.employees.records=state.employees.records.map(element => {
                if(playload.id==element.id){
                        element.isdata= !element.isdata
                        return element;
                }else{
                    return element;
                }
            });
        }
    },
    actions:{
        recordupdate:function({commit},playload){
            return commit('CHECK_UNCHECK',playload)
        }
    }
}