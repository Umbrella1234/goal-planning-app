import { GoalBEModel } from "@/app/features/goals/types/goalsTypes";
import { db } from "@/app/server/db";
import { NextResponse } from "next/server";

export type ServerSuccessResponse<TResponse> = {
  responseData: TResponse;
};

export type ServerErrorResponse<TErrorData extends null | object> = {
  error: string;
  errorData: TErrorData;
};

export type GetGoalsResponse = ServerSuccessResponse<{
  goals: Record<string, GoalBEModel>;
}>;

export const GET = async () => {
  try {
    await db.write();
    return NextResponse.json<GetGoalsResponse>({
      responseData: { goals: db.data.goals },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json<ServerErrorResponse<null>>(
      { error: "Failed to fetch goals", errorData: null },
      { status: 500 }
    );
  }
};
