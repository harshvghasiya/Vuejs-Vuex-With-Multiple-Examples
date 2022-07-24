import { createStore } from 'vuex'
import counterModule from "@/store/modules/counter.module"
import employeeModule from "@/store/modules/employee.module"

export default createStore({
  state: {
    counterState:counterModule.state,
    employeeState:employeeModule.state
  },
  
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule
  },
  getters:{
    getCounterState:function(state){
      return state.counterState.counters;
    },
    getEmployeeState:function(state){
      return state.employeeState.employees;
    }
  }
})
