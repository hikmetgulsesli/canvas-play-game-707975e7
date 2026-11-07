// Application state store for STATE_APP_STATE.
//
// The store owns the application state contract:
//   currentScore -> non negative score
//   highScore    -> absent until the game starts, then the stored high score
//   status       -> "idle" | "playing"
//   statusText   -> "" | "Game started"

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { INITIAL_APP_STATE } from "./prod-canvas-play-game.types";
import type { AppState } from "./prod-canvas-play-game.types";
import { readHighScoreRecord } from "./prod-canvas-play-game.repo";
import { executeStartGame } from "../surf-play-page/act_start_game";

export interface AppStateContextValue {
  state: AppState;
  startGame: () => void;
}

const AppStateContext = createContext<AppStateContextValue | null>(null);

/**
 * Rehydration policy: initialization (PERSIST_HIGH_SCORE_STORAGE).
 * The persisted high score record is read once when the store is created.
 */
export function rehydrateAppState(): AppState {
  const record = readHighScoreRecord();
  if (record === null) {
    return { ...INITIAL_APP_STATE };
  }
  return { ...INITIAL_APP_STATE, highScore: record.highScore };
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(rehydrateAppState);

  const startGame = useCallback(() => {
    setState((previous) => executeStartGame(previous));
  }, []);

  const value = useMemo<AppStateContextValue>(() => ({ state, startGame }), [state, startGame]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateContextValue {
  const context = useContext(AppStateContext);
  if (context === null) {
    throw new Error("APP_STATE_CONTEXT_MISSING");
  }
  return context;
}
