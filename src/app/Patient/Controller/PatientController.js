import axios from 'axios';

export default {
    getPatients() {
        return axios.get('/patients');
    },
    addPatient(patient) {
        return axios.post('/patients', patient);
    },
    // Otros métodos relacionados con los pacientes...
};
