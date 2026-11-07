// Deterministic fixtures for the canvas play game feature.

import { INITIAL_APP_STATE } from "../features/prod-canvas-play-game/prod-canvas-play-game.types";
import type { AppState, HighScoreRecord } from "../features/prod-canvas-play-game/prod-canvas-play-game.types";

export const IDLE_APP_STATE_FIXTURE: AppState = { ...INITIAL_APP_STATE };

export const STARTED_APP_STATE_FIXTURE: AppState = {
  currentScore: 0,
  highScore: 0,
  status: "playing",
  statusText: "Game started",
};

export const HIGH_SCORE_RECORD_FIXTURE: HighScoreRecord = { highScore: 0 };
