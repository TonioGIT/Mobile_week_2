<template>
    <div>
        <br>
        <h1>{{ machineName }} : {{machine.name}}</h1>
        <h2 id="red" v-if="machine.status" >{{machineStat}} KO...</h2>
        <h2 id="green" v-else>{{machineStat}} OK !</h2>
        <h2>{{ machineDate }} : {{machine.checkedAt}}</h2>
    </div>    
</template>

<script>
var event = new Date();
    export default {
        data () {
            return {
                machineName: 'Machine name: ',
                machineStat: 'Status: ',
                machineDate: 'Last time checked: ',            
              machine:{  
                name: 'Berlin Coffee Machine',
                status: false,
                checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
            }
        }
    }
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