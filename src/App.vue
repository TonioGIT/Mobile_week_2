<template>
  <div id="app">
    <img src="http://www.clker.com/cliparts/A/q/F/O/c/o/coffee-cup-md.png">
    <h1>{{ msg }}</h1>
    <h2>Choisissez un module:</h2>
    <ul>
      <li><input type="button" v-on:click= "onMachinesListClick" id="button" value="LISTE DES MACHINES"></li>
      <li><input type="button" v-on:click= "onMapClick" id="button" value="CARTE"></li>
      <!-- <toto></toto> -->
      <!-- <laCarte></laCarte> -->
    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'COFFEE AROUND THE WORLD...'
    }
  },
  methods: {
    onMachinesListClick: function() {
      window.alert("Vous allez vers la liste des machines !");
    },
    onMapClick: function() {
      window.alert("Vous allez vers la carte des machines !");
    }
}
}


</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#button {
  background-color: rgb(92, 142, 216);
  padding: 20px;
  font-size: 20px;
}
</style>
