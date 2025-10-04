const {Doctor, Patient, Appointment, PatientQueue} = require('../src/HealthLineApp'); 

describe('Doctor Class Tests', () => {
  test('Doctor should be available by default', () => {
    const doctor = new Doctor('Dr. John', '90256722', 'Surgeon');
    expect(doctor.isAvailable).toBe(true);
  });

  test('Doctor availability can be changed', () => {
    const doctor = new Doctor('Dr. John', '123456', 'Surgeon');
    doctor.setAvailability(false);
    expect(doctor.isAvailable).toBe(false);
  });

  test('Doctor details should be correct', () => {
    const doctor = new Doctor('Dr. John', '123456', 'Cardiology');
    expect(doctor.getDetails()).toBe('Dr. John (Cardiology) - 123456');
  });
});

describe('Patient Class Tests', () => {
  test('Patient details should be correct', () => {
    const patient = new Patient('Feyi', 30, '987654', 'Checkup');
    expect(patient.getDetails()).toBe('Feyi, Age: 30, Reason: Checkup');
  });
});

describe('Appointment Class Tests', () => {
  test('Appointment should be scheduled by default', () => {
    const doctor = new Doctor('Dr. Eloka', '123-456', 'Mid-wifery');
    const patient = new Patient('Feyi', 30, '987-654', 'Checkup');
    const appt = new Appointment(doctor, patient, '2025-10-04 10:00');
    expect(appt.status).toBe('Scheduled');
  });

  test('Appointment status can be updated', () => {
    const doctor = new Doctor('Dr. John', '123-456', 'Cardiology');
    const patient = new Patient('Alice', 30, '987-654', 'Checkup');
    const appt = new Appointment(doctor, patient, '2025-10-04 10:00');
    appt.appointmentStatus('Seen');
    expect(appt.status).toBe('Seen');
  });
});

describe('PatientQueue Class Tests', () => {
  test('Patient can be added to queue', () => {
    const queue = new PatientQueue();
    const patient = new Patient('Alice', 30, '987-654', 'Checkup');
    queue.addPatient(patient);
    expect(queue.appointments.length).toBe(1);
  });

  test('Another patient can be added to queue', () => {
    const queue = new PatientQueue();
    const patient = new Patient('Feyi', 30, '987654', 'Checkup');
    queue.addPatient(patient);
    const patient2 = new Patient('Chi', 30, '987654', 'Malaria');
    queue.addPatient(patient2);
    expect(queue.appointments.length).toBe(2);
  });
});