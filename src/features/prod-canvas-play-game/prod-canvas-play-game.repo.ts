// Local-storage repository for ENTITY_HIGH_SCORE_RECORD.
//
// Bound to PERSIST_HIGH_SCORE_STORAGE:
//   kind       -> local_storage
//   owner      -> application
//   durability -> reload
//   key        -> setfarm.canvas_play_game.high_score_storage.v1
//   rehydration-> initialization

import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-play-game.types";
import { isHighScoreRecord } from "./prod-canvas-play-game.types";
import type { HighScoreRecord } from "./prod-canvas-play-game.types";

function storage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readHighScoreRecord(): HighScoreRecord | null {
  const store = storage();
  if (store === null) return null;
  try {
    const raw = store.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) return null;
    const parsed: unknown = JSON.parse(raw);
    if (isHighScoreRecord(parsed)) return { highScore: parsed.highScore };
    return null;
  } catch {
    return null;
  }
}

export function writeHighScoreRecord(record: HighScoreRecord): void {
  const store = storage();
  if (store === null) return;
  try {
    store.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify({ highScore: record.highScore }));
  } catch {
    // Persistence is best effort; the in-memory state remains authoritative.
  }
}

export function clearHighScoreRecord(): void {
  const store = storage();
  if (store === null) return;
  try {
    store.removeItem(HIGH_SCORE_STORAGE_KEY);
  } catch {
    // Ignore storage failures.
  }
}
