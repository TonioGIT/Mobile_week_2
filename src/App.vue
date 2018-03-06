<template>
  <div id="app">
    <img src="http://www.clker.com/cliparts/A/q/F/O/c/o/coffee-cup-md.png">
    <h1>{{ msg }}</h1>
    <h2>Choisissez un module:</h2>
    <ul>
      <li><router-link :to="'home'" id="button">HOME</router-link></li>
      <li><router-link :to="'machines'" id="button">LISTE DES MACHINES</router-link></li>
      <li><router-link :to="'map'" id="button">CARTE DES MACHINES</router-link></li>
      <router-view></router-view>
    </ul>
  </div>  
</template>

<script>
// import MachinesList from './MachinesList.vue'
// import MachinesMap from './MachinesMap.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'COFFEE AROUND THE WORLD...'
    }
  },
  // components: {
  //   MachinesList,
  //   MachinesMap,
  // },
  //  methods: {
  //   onMachinesListClick: function() {
  //     window.alert("Vous allez vers la liste des machines !");
  //   },
  //   onMapClick: function() {
  //     window.alert("Vous allez vers la carte des machines !");
  //   }
  // }
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

/* #button {
  background-color: rgb(92, 142, 216);
  padding: 20px;
  font-size: 20px;
} */

#button {
   border: 1px solid #0a3c59;
   background: #3e779d;
   background: -webkit-gradient(linear, left top, left bottom, from(#65a9d7), to(#3e779d));
   background: -webkit-linear-gradient(top, #65a9d7, #3e779d);
   background: -moz-linear-gradient(top, #65a9d7, #3e779d);
   background: -ms-linear-gradient(top, #65a9d7, #3e779d);
   background: -o-linear-gradient(top, #65a9d7, #3e779d);
   background-image: -ms-linear-gradient(top, #65a9d7 0%, #3e779d 100%);
   padding: 10.5px 21px;
   -webkit-border-radius: 6px;
   -moz-border-radius: 6px;
   border-radius: 6px;
   -webkit-box-shadow: rgba(255,255,255,0.4) 0 1px 0, inset rgba(255,255,255,0.4) 0 1px 0;
   -moz-box-shadow: rgba(255,255,255,0.4) 0 1px 0, inset rgba(255,255,255,0.4) 0 1px 0;
   box-shadow: rgba(255,255,255,0.4) 0 1px 0, inset rgba(255,255,255,0.4) 0 1px 0;
   text-shadow: #7ea4bd 0 1px 0;
   color: #06426c;
   font-size: 18px;
   font-family: helvetica, serif;
   text-decoration: none;
   vertical-align: middle;
   }
#button:hover {
   border: 1px solid #0a3c59;
   text-shadow: #1e4158 0 1px 0;
   background: #3e779d;
   background: -webkit-gradient(linear, left top, left bottom, from(#65a9d7), to(#3e779d));
   background: -webkit-linear-gradient(top, #65a9d7, #3e779d);
   background: -moz-linear-gradient(top, #65a9d7, #3e779d);
   background: -ms-linear-gradient(top, #65a9d7, #3e779d);
   background: -o-linear-gradient(top, #65a9d7, #3e779d);
   background-image: -ms-linear-gradient(top, #65a9d7 0%, #3e779d 100%);
   color: #fff;
   }
#button:active {
   text-shadow: #1e4158 0 1px 0;
   border: 1px solid #0a3c59;
   background: #65a9d7;
   background: -webkit-gradient(linear, left top, left bottom, from(#3e779d), to(#3e779d));
   background: -webkit-linear-gradient(top, #3e779d, #65a9d7);
   background: -moz-linear-gradient(top, #3e779d, #65a9d7);
   background: -ms-linear-gradient(top, #3e779d, #65a9d7);
   background: -o-linear-gradient(top, #3e779d, #65a9d7);
   background-image: -ms-linear-gradient(top, #3e779d 0%, #65a9d7 100%);
   color: #fff;
   }
</style>