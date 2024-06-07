<template>
    <div class="appointment-types">
      <h1>Appointment Types</h1>
      <PrimeButton label="Add Appointment Type" @click="showDialog = true" />
      <PrimeDialog v-model:visible="showDialog" header="New Appointment Type">
        <PrimeInputText v-model="appointmentType.name" placeholder="Name" />
        <PrimeCalendar v-model="appointmentType.date" showIcon />
        <PrimeButton label="Save" @click="addAppointmentType" />
      </PrimeDialog>
      <ul>
        <li v-for="appointmentType in appointmentTypes" :key="appointmentType.id">
          {{ appointmentType.name }}
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
    name: 'AppointmentTypesView',
    components: {
      PrimeButton,
      PrimeDialog,
      PrimeInputText,
      PrimeCalendar
    },
    setup() {
      const appointmentTypes = ref([]);
      const showDialog = ref(false);
      const appointmentType = ref({ name: '', date: null });
  
      const loadAppointmentTypes = async () => {
        try {
          const response = await axios.get('/appointment-types');
          appointmentTypes.value = response.data;
        } catch (error) {
          console.error('Error loading appointment types:', error);
        }
      };
  
      const addAppointmentType = async () => {
        try {
          const response = await axios.post('/appointment-types', appointmentType.value);
          appointmentTypes.value.push(response.data);
          showDialog.value = false;
          appointmentType.value = { name: '', date: null };
        } catch (error) {
          console.error('Error adding appointment type:', error);
        }
      };
  
      onMounted(() => {
        loadAppointmentTypes();
      });
  
      return { appointmentTypes, showDialog, appointmentType, addAppointmentType, loadAppointmentTypes };
    }
  };
  </script>
  
  <style scoped>
  .appointment-types {
    padding: 20px;
  }
  </style>
  