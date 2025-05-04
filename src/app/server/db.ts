import { JSONFilePreset } from "lowdb/node";
import { GoalBEModel } from "../features/goals/types/goalsTypes";

export type DBType = {
  goals: Record<string, GoalBEModel>;
};

const goals: DBType["goals"] = {};

const defaultDBData: DBType = {
  goals,
};

export const db = await JSONFilePreset<DBType>("data/db.json", defaultDBData);
