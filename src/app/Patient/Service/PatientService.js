import PatientRepository from '../Repository/PatientRepository';
import Patient from '../Models/PatientModel';

export default {
    async getAllPatients() {
        return await PatientRepository.fetchPatients();
    },
    async createPatient(data) {
        const patient = new Patient(data.name, data.age, data.gender);
        return await PatientRepository.savePatient(patient);
    },
    // Otros métodos de lógica de negocio...
};
