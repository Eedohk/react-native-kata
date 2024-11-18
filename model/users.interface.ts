export interface PostI {
    id: number;
    text: string;
    userId?: number;
  }
  

export interface BaseUserI {
    roles: string[];
    name: string;
    id: number;
    posts: PostI[];
}
