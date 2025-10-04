class Doctor {
    constructor(name, contact, department){
        this.name = name
        this.department = department
        this.contactInfo = contact
        this.isAvailable = true
    }

    setAvailability(availability) {
    this.isAvailable = availability;
  }

    getDetails() {
    return `${this.name} ${this.department}  ${this.contactInfo}`;
  }

}

class Patient {
  constructor( name, age, contactInfo, visitPurpose) {
    this.name = name;
    this.age = age;
    this.contactInfo = contactInfo;
    this.visitPurpose = visitPurpose;
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Reason: ${this.visitPurpose}`;
  }
}

class Appointment {
  constructor(doctor, patient, appointmentTime) {
    this.doctor = doctor;
    this.patient = patient;
    this.appointmentTime = appointmentTime;
    this.status = "Scheduled";
  }

    appointmentStatus(status) {
    this.status = status;
  }
}

class PatientQueue {
  constructor() {
    this.appointments = [];
  }

  addPatient(patient) {
    this.appointments.push(patient);
  }
  
}
  module.exports = {Doctor, Patient, Appointment, PatientQueue}
