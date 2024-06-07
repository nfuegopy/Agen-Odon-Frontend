<template>
    <div>
      <h2>Patients</h2>
      <p-table :value="patients">
        <p-column field="name" header="Name"></p-column>
        <p-column field="age" header="Age"></p-column>
        <p-column field="gender" header="Gender"></p-column>
      </p-table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import PatientService from '../Service/PatientService';
  
  export default {
    name: 'PatientComponent',
    setup() {
      const patients = ref([]);
  
      const loadPatients = async () => {
        patients.value = await PatientService.getAllPatients();
      };
  
      onMounted(loadPatients);
  
      return { patients };
    },
  };
  </script>
  