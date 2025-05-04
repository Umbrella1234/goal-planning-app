"use client";
import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { GoalBEModel } from "../types/goalsTypes";
import { buildTree } from "@/app/utils/treeStructure/buildTreeStructure";
import { TreeNode } from "@/app/utils/treeStructure/treeStructureTypes";

type GoalsProviderProps = {
  goals: Record<string, GoalBEModel>;
  children: ReactNode;
};

type GoalsContextValue = {
  goals: GoalsProviderProps["goals"];
  goalsTree: Array<TreeNode<GoalBEModel>>;
};

const GoalsContext = createContext<GoalsContextValue>({
  goals: {},
  goalsTree: [],
});

export const GoalsProvider: React.FC<GoalsProviderProps> = ({
  children,
  goals,
}) => {
  const goalsTree = useMemo(() => buildTree(goals), [goals]);
  const value = useMemo(() => ({ goals, goalsTree }), [goals, goalsTree]);
  return (
    <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
};

export const useGoals = () => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }
  return context;
};
