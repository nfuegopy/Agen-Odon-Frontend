<template>
    <div class="patients">
      <h1>Patients</h1>
      <PrimeButton label="Add Patient" @click="showDialog = true" />
      <PrimeDialog v-model:visible="showDialog" header="New Patient">
        <PrimeInputText v-model="patient.name" placeholder="Name" />
        <PrimeCalendar v-model="patient.birthday" showIcon />
        <PrimeButton label="Save" @click="addPatient" />
      </PrimeDialog>
      <ul>
        <li v-for="patient in patients" :key="patient.id">
          {{ patient.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import PrimeButton from 'primevue/button';
  import PrimeDialog from 'primevue/dialog';
  import PrimeInputText from 'primevue/inputtext';
  import PrimeCalendar from 'primevue/calendar';
  
  export default {
    name: 'PatientsView',
    components: {
      PrimeButton,
      PrimeDialog,
      PrimeInputText,
      PrimeCalendar
    },
    setup() {
      const patients = ref([]);
      const showDialog = ref(false);
      const patient = ref({ name: '', birthday: null });
  
      const loadPatients = async () => {
        try {
          const response = await axios.get('/patients');
          patients.value = response.data;
        } catch (error) {
          console.error('Error loading patients:', error);
        }
      };
  
      const addPatient = async () => {
        try {
          const response = await axios.post('/patients', patient.value);
          patients.value.push(response.data);
          showDialog.value = false;
          patient.value = { name: '', birthday: null };
        } catch (error) {
          console.error('Error adding patient:', error);
        }
      };
  
      onMounted(() => {
        loadPatients();
      });
  
      return { patients, showDialog, patient, addPatient, loadPatients };
    }
  };
  </script>
  
  <style scoped>
  .patients {
    padding: 20px;
  }
  </style>
  