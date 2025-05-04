"use client";
import React from "react";
import { useGoals } from "../../contexts/GoalsProvider";
import { GoalsTree } from "../GoalsTree/GoalsTree";
import { useBoolean } from "usehooks-ts";

const CreateGoalDialog: React.FunctionComponent<{
  parentGoalId?: string;
}> = () => {};

export const GoalsPageContent: React.FunctionComponent = () => {
  const { goalsTree } = useGoals();
  const shouldShowCreateDialog = useBoolean();

  return (
    <div>
      <button onClick={shouldShowCreateDialog.setTrue}>Create goal</button>
      <GoalsTree />
    </div>
  );
};
