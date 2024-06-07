<template>
    <div class="calendar">
      <FullCalendar :options="calendarOptions" />
    </div>
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import { ref, onMounted } from 'vue';
  import axios from '../axios';
  
  export default {
    name: 'CalendarView',
    components: {
      FullCalendar
    },
    setup() {
      const calendarOptions = ref({
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        events: []
      });
  
      const loadAppointments = async () => {
        try {
          const response = await axios.get('/appointments');
          calendarOptions.value.events = response.data.map(appointment => ({
            title: `Cita con ${appointment.doctor.name}`,
            start: appointment.date
          }));
        } catch (error) {
          console.error('Error loading appointments:', error);
        }
      };
  
      onMounted(() => {
        loadAppointments();
      });
  
      return { calendarOptions };
    }
  };
  </script>
  
  <style scoped>
  .calendar {
    padding: 20px;
  }
  </style>
  