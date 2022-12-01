import {userStore, workerStore} from '../store/store';
import {Worker} from '../store/types';

export const getUnviewedWorkers = (): Worker[] => {
  const workers = workerStore.getAll();
  const viewed = allViewedWorkers();

  return workers.filter(worker => !viewed.includes(worker.id));
};

export const userlikesWorker = (id: string): void => {
  userStore.like(id);
};

export const userDislikesWorker = (id: string): void => {
  userStore.dislike(id);
};

const allViewedWorkers = (): string[] => {
  return userStore.getLikes().concat(userStore.getDislikes());
};
