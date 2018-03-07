<template>
    <div>
        <h1>Liste des machines</h1> 
        <machine-compo id="listcadres" v-for="machine in machines" :key="machine.id" v-bind:name="machine.name" 
        v-bind:status="machine.status" 
        v-bind:checkedAt="machine.checkedAt">
        </machine-compo>
    </div>
</template>

<script>
var event = new Date();
    export default {
        data() {
            return {
            // machine: {  
            //     name: 'Berlin Coffee Machine',
            //     status: false,
            //     checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
            //   }
                machines: [{
                    id: 1,
                    name: 'BLUE OCEAN',
                    status: true,
                    checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                }, {
                    id: 2,
                    name: 'BERRY CRUSH',
                    status: false,
                    checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                }, {
                    id: 3,
                    name: 'WHITE SOVIET',
                    status: true,
                    checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                }, {
                    id: 4,
                    name: 'PINK LADY',
                    status: false,
                    checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
                }]
            }
        }
}
</script>

<style scoped>

#listcadres {
    border: 3px solid #0a3c59;
    margin: 10.5px 21px;
}

</style>
