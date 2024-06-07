<template>
    <div class="doctors">
      <h1>Doctors</h1>
      <PrimeButton label="Add Doctor" @click="showDialog = true" />
      <PrimeDialog v-model:visible="showDialog" header="New Doctor">
        <PrimeInputText v-model="doctor.name" placeholder="Name" />
        <PrimeButton label="Save" @click="addDoctor" />
      </PrimeDialog>
      <ul>
        <li v-for="doctor in doctors" :key="doctor.id">
          {{ doctor.name }}
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
  
  export default {
    name: 'DoctorsView',
    components: {
      PrimeButton,
      PrimeDialog,
      PrimeInputText
    },
    setup() {
      const doctors = ref([]);
      const showDialog = ref(false);
      const doctor = ref({ name: '' });
  
      const loadDoctors = async () => {
        try {
          const response = await axios.get('/doctors');
          doctors.value = response.data;
        } catch (error) {
          console.error('Error loading doctors:', error);
        }
      };
  
      const addDoctor = async () => {
        try {
          const response = await axios.post('/doctors', doctor.value);
          doctors.value.push(response.data);
          showDialog.value = false;
          doctor.value = { name: '' };
        } catch (error) {
          console.error('Error adding doctor:', error);
        }
      };
  
      onMounted(() => {
        loadDoctors();
      });
  
      return { doctors, showDialog, doctor, addDoctor, loadDoctors };
    }
  };
  </script>
  
  <style scoped>
  .doctors {
    padding: 20px;
  }
  </style>
  