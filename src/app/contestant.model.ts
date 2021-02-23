export const contestantAttributesMapping = {
  name: 'Name',
  age: 'Age',
  hometown: 'Hometown',
  job: 'Job',
  entrance: 'Entrance',
  week_elim: 'Week Eliminated',
  notables: 'Notables',
  photo_url: 'Photo'
};

export interface Contestant {
  name: string;
  age: number;
  hometown: string;
  job: string;
  entrance: string;
  week_elim: number;
  notables: string;
  photo_url: string;
}
