<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                    
                        <p class="h3">{{counterState.counter}}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary m-2" @click="increment">Increment</button>
                        <button class="btn btn-danger" @click="decrement">Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';



export default{
    name:'CunterComponent',
    data:function(){
        return{    
            count:0,
        }
    },
    methods:{
        increment:function(){
            this.$store.dispatch("counterModule/incrementCounter")
        },
        decrement:function(){
            // this.count= this.count-1;
            this.$store.dispatch("counterModule/decrementCounter")

        }
    },
    computed: mapGetters({
        counterState:'getCounterState'
    })
}
</script>