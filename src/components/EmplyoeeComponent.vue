<template>
 <div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="crd mt-5">
                <div class="card-body">
                    <ul class="list-group" >
                        <li class="list-group-item" v-for="record in employeeState.records" :key="record.id">
                        <input type="checkbox" :checked="record.isdata" class="form-check" @change="updaterecord(record.id)" >
                        {{record.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div v-for="reco in employeeState.records" :key="reco">
                <div class="card mt-5" v-if="reco.isdata">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">
                                ID : {{reco.id}}
                            </li>
                            <li class="list-group-item">
                                Name : {{reco.name}}
                            </li>
                            <li class="list-group-item">
                                Email : {{reco.email}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default{
    name:'EmplyoeeComponent',
    data:function(){
        return{
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
        }
    },
    methods:{
          updaterecord :function(id){
           this.$store.dispatch("employeeModule/recordupdate",{id:id})
          }  
    },
    computed: mapGetters({
        employeeState:'getEmployeeState',
    })

}
</script>