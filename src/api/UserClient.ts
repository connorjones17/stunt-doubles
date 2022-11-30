import {userStore, workerStore} from '../store/store';

export const getUnviewedWorkers = () => {
  const workers = workerStore.getAll();
  const viewed = allViewedWorkers();

  return workers.filter(worker => !viewed.includes(worker.id));
};

export const userlikesWorker = (id: string) => {
  userStore.like(id);
};

export const userDislikesWorker = (id: string) => {
  userStore.dislike(id);
};

const allViewedWorkers = (): string[] => {
  return userStore.getLikes().concat(userStore.getDislikes());
};
