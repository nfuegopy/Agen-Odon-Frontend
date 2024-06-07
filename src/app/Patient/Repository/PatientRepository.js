import PatientController from '../Controller/PatientController';

export default {
    async fetchPatients() {
        const response = await PatientController.getPatients();
        return response.data;
    },
    async savePatient(patient) {
        const response = await PatientController.addPatient(patient);
        return response.data;
    },
    // Otros métodos de interacción con los datos...
};
