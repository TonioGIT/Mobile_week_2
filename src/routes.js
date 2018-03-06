import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';
import Machine from './Machine.vue';

export default [    
    { path:'/machines', component: MachinesList},
    { path:'/map', component: MachinesMap},
    { path:'/machine', component: Machine},
]