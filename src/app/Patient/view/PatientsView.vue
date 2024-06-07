<template>
    <div>
      <patient-component></patient-component>
    </div>
  </template>
  
  <script>
  import PatientComponent from './components/PatientComponent.vue';
  
  export default {
    name: 'PatientView',
    components: {
      PatientComponent,
    },
  };
  </script>
  