"use client";
import React from "react";
import { useGoals } from "../../contexts/GoalsProvider";
import { GoalBEModel } from "../../types/goalsTypes";
import { TreeNode } from "@/app/utils/treeStructure/treeStructureTypes";
import { isNumber } from "lodash";

export const GoalsList: React.FunctionComponent<{
  goals: Array<TreeNode<GoalBEModel>>;
}> = ({ goals }) => {
  return (
    <div>
      <ul>
        {goals.map((goal) => (
          <GoalItem key={goal.id} goal={goal} />
        ))}
      </ul>
    </div>
  );
};

const GoalItem: React.FC<{ goal: TreeNode<GoalBEModel> }> = ({ goal }) => {
  const getProgress = () => {
    if (isNumber(goal.progress)) {
      return `(${goal.progress}%)`;
    }

    if (goal.children.length > 0) {
      return goal.children.reduce((acc, { progress = 0 }) => acc + progress, 0);
    }

    return goal.progress;
  };

  return (
    <li style={{ marginLeft: goal.nestingLevel * 20 }}>
      <strong>{goal.name}</strong> – {goal.desc} {getProgress()}
      {goal.children.length > 0 && <GoalsList goals={goal.children} />}
    </li>
  );
};

export const GoalsTree: React.FunctionComponent = () => {
  const { goalsTree } = useGoals();

  return (
    <div>
      <GoalsList goals={goalsTree} />
    </div>
  );
};
