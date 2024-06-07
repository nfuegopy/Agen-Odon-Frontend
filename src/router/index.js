import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CalendarView from '../views/CalendarView.vue';
import PatientsView from '../views/PatientsView.vue';
import DoctorsView from '../views/DoctorsView.vue';
import AppointmentTypesView from '../views/AppointmentTypesView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarView
  },
  {
    path: '/patients',
    name: 'Patients',
    component: PatientsView
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: DoctorsView
  },
  {
    path: '/appointment-types',
    name: 'AppointmentTypes',
    component: AppointmentTypesView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
