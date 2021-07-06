import type { User } from "./User";

export type MoveUser = {
  id: string;
  userId: string;
  moveId: string;
  user: User;
};
