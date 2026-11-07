// ACT_START_GAME - "Start game"
//
// Contract bindings:
//   trigger          -> user (rendered control CSLOT_START_GAME_START_BUTTON_PLACEMENT)
//   navigation       -> stay
//   state deltas     -> STATE_APP_STATE /status        = "playing"
//                       STATE_APP_STATE /statusText    = "Game started"
//                       STATE_APP_STATE /currentScore  = 0
//                       STATE_APP_STATE /highScore     = 0
//   persistence      -> PERSIST_HIGH_SCORE_STORAGE write ENTITY_HIGH_SCORE_RECORD
//   affected surfaces-> SURF_PLAY_PAGE, SURF_GAME_CANVAS

import { writeHighScoreRecord } from "../prod-canvas-play-game/prod-canvas-play-game.repo";
import type { AppState } from "../prod-canvas-play-game/prod-canvas-play-game.types";

export const START_GAME_STATUS = "playing";
export const START_GAME_STATUS_TEXT = "Game started";

/** Pure state delta application for ACT_START_GAME. */
export function applyStartGame(_state: AppState): AppState {
  return {
    status: START_GAME_STATUS,
    statusText: START_GAME_STATUS_TEXT,
    currentScore: 0,
    highScore: 0,
  };
}

/** Applies the ACT_START_GAME deltas and persists the high score record. */
export function executeStartGame(state: AppState): AppState {
  const next = applyStartGame(state);
  writeHighScoreRecord({ highScore: next.highScore as number });
  return next;
}
