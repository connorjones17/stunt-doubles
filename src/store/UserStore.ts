export default class UserStore {
  likes: string[] = [];
  dislikes: string[] = [];

  like = (id: string) => {
    this.likes.push(id);
  };

  dislike = (id: string) => {
    this.dislikes.push(id);
  };

  getLikes = (): string[] => {
    return [...this.likes];
  };

  getDislikes = (): string[] => {
    return [...this.dislikes];
  };
}
