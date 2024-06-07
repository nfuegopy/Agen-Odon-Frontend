import { defineStore } from 'pinia';
import axios from 'axios';

export const usePatientsStore = defineStore('patients', {
    state: () => ({
        patients: [],
    }),
    actions: {
        async fetchPatients() {
            const response = await axios.get(`${process.env.VUE_APP_API_URL}/patients`);
            this.patients = response.data;
        },
        async addPatient(patient) {
            await axios.post(`${process.env.VUE_APP_API_URL}/patients`, patient);
            this.fetchPatients();
        },
    },
});
