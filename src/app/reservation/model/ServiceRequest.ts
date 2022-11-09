export interface ServiceRequest {
  id: number;
  detail: String;
  reservation_price: number;
  confirmation: number;
  total_price: number;
  technician: Technician;
  client: Client;
}

export interface Technician {
  technicianId: number;
  disponibility: number;
  district: String;
  email: String;
  professionalProfile: String;
  username: String;
  valoration: number;
  telephone_number: String;
  name: String;
  last_name: String;

  speciality: Speciality;
}

export interface Client {
  clientId: number;
  username: String;
  name: String;
  last_name: String;
  email: String;
  dni: String;
  telephone_number: String;
}

export interface Speciality {
  specialityId: number;
  name: String;
}
