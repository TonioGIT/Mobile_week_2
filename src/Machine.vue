<template>
    <div>
        <br>
        <h1>{{ machineName }} {{name}}</h1>
        <h2 id="red" v-if="status" >{{machineStat}} KO...</h2>
        <h2 id="green" v-else>{{machineStat}} OK !</h2>
        <h2>{{ machineDate }} {{checkedAt}}</h2>        
    </div>
</template>


<script>
    export default {
        data () {
            return {
                machineName: 'Machine name: ',
                machineStat: 'Status: ',
                machineDate: 'Last time checked: ',    
            //   machine:{  
            //     name: 'Berlin Coffee Machine',
            //     status: false,
            //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
            //   }
            }
        },
        props:[
            'name', 'status', 'checkedAt'
            ],

    }
</script>


<style scoped>
    #red {
        color: #ee1212;
    }

    #green {
        color: #42b983;
    }
</style>