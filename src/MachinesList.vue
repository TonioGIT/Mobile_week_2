<template>
    <div>
        <h1>Liste des machines</h1> 
        <machine-compo v-bind:name="machine.name" 
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
            machine: {  
                name: 'Berlin Coffee Machine',
                status: false,
                checkedAt: event.toLocaleString('en-FR', { timeZone: 'UTC' }),
              }
            }
        }
}
</script>

<style scoped>

</style>
