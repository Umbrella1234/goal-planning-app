export type GoalBEModel = {
  name: string;
  desc: string;
  id: string;
  createdOn: string;
  parentId?: string;
  progress?: number;
};
