// Shared product/runtime types for the canvas play game feature.
//
// Contract bindings (see story contract for US-001):
//   STATE_APP_STATE            -> application state
//   ENTITY_HIGH_SCORE_RECORD   -> persisted high score record
//   PERSIST_HIGH_SCORE_STORAGE -> local_storage persistence policy

export const STATE_APP_STATE_ID = "STATE_APP_STATE";
export const ENTITY_HIGH_SCORE_RECORD_ID = "ENTITY_HIGH_SCORE_RECORD";
export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_play_game.high_score_storage.v1";

export type GameStatus = "idle" | "playing";

export interface AppState {
  currentScore: number;
  highScore: number | null;
  status: GameStatus;
  statusText: string;
}

export interface HighScoreRecord {
  highScore: number;
}

export const INITIAL_APP_STATE: AppState = {
  currentScore: 0,
  highScore: null,
  status: "idle",
  statusText: "",
};

export function isHighScoreRecord(value: unknown): value is HighScoreRecord {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as HighScoreRecord).highScore === "number" &&
    Number.isFinite((value as HighScoreRecord).highScore)
  );
}
