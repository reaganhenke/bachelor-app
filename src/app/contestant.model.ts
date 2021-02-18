export const contestantAttributesMapping = {
  name: 'Name',
  age: 'Age',
  hometown: 'Hometown',
  job: 'Job',
  entrace: 'Entrance',
  week_elim: 'Week Eliminated',
  notables: 'Notables',
  photo_url: 'Photo'
};

export interface Contestant {
  name: string;
  age: number;
  hometown: string;
  job: string;
  entrace: string;
  week_elim: string;
  notables: string;
  photo_url: string;
}
