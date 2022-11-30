import UserStore from './UserStore';
import WorkerStore from './WorkerStore';

// NOTE: Please interact with the store through the API clients only. Thanks :)

export const userStore = new UserStore();
export const workerStore = new WorkerStore();
