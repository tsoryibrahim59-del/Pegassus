export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppView {
  HOME = 'HOME',
  REGISTRATION = 'REGISTRATION',
  SCHOLARSHIP = 'SCHOLARSHIP',
  GUIDE = 'GUIDE'
}

export interface StudentInfo {
  firstName: string;
  lastName: string;
  nina: string; // Numéro d'Identification Nationale
  phone: string;
  email: string;
  bacSeries: string;
  bacYear: string;
}

export interface ScholarshipApplication extends StudentInfo {
  university: string;
  faculty: string;
  cycle: 'Licence' | 'Master' | 'Doctorat';
  motivationLetter: string;
  needsSocialAid: boolean;
}