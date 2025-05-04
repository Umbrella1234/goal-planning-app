import axios from "axios";
import { FunctionComponent } from "react";
import { GoalsProvider } from "../contexts/GoalsProvider";
import { GetGoalsResponse } from "@/app/api/goals/route";
import { GoalsPageContent } from "../components/GoalsPageContent/GoalsPageContent";

export const GoalsPage: FunctionComponent = async () => {
  try {
    const { data } = await axios.get<GetGoalsResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/goals`
    );

    return (
      <GoalsProvider goals={data.responseData.goals}>
        <GoalsPageContent />
      </GoalsProvider>
    );
  } catch (e) {
    console.error("Error fetching goals:", e);
    return <div>Error fetching goals</div>;
  }
};
