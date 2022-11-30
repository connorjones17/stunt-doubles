import {Worker} from './types';

export default class WorkerStore {
  workers: Worker[] = [
    {
      id: '11d0bf67-c614-4525-af7a-75742943b6ab',
      firstName: 'Rick',
      lastName: 'Avery',
      position: 'Car Stuntman',
      image: require('../resources/rick-avery.jpg'),
    },
    {
      id: 'ef5d91c9-c741-4c65-b9e3-ca6bd34f46e5',
      firstName: 'Perry',
      lastName: 'Barndt',
      position: 'Stunt Coordinator',
      image: require('../resources/perry-barndt.jpeg'),
    },
    {
      id: '391a2724-0b4e-4a87-a9c5-58598ac736b5',
      firstName: 'Brad',
      lastName: 'Bovee',
      position: 'Stunt Rigger',
      image: require('../resources/brad-bovee.jpeg'),
    },
    {
      id: 'd8958c66-34d2-4df1-8fd6-cdabd9ef5ebf',
      firstName: 'Erik',
      lastName: 'Cord',
      position: 'Stuntman',
      image: require('../resources/erik-cord.jpeg'),
    },
    {
      id: 'a13f1d17-c6ff-497a-9e80-0ec0258e83f7',
      firstName: 'Shawn',
      lastName: 'Crowder',
      position: 'Stunt Double',
      image: require('../resources/shawn-crowder.jpeg'),
    },
  ];

  getAll = (): Worker[] => {
    return [...this.workers];
  };
}
