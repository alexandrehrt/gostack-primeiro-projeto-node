import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

// Data Transfer Object
interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  // Listar todos agendamentos
  public all(): Appointment[] {
    return this.appointments;
  }

  // Verificar se existe outro agendamento no mesmo horário
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find((appointment) =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
