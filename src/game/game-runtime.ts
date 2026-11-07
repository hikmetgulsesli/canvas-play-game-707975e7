// Minimal game runtime for the canvas play game route.
//
// Owns the active route path and a frame tick used by the contained game
// canvas surface (SURF_GAME_CANVAS). It never mutates product state; state
// lives in the application store.

export type RuntimeListener = () => void;

export interface GameRuntime {
  getRoute(): string;
  getTick(): number;
  subscribe(listener: RuntimeListener): () => void;
  navigate(path: string): void;
  start(): void;
  stop(): void;
}

function currentPath(): string {
  if (typeof window === "undefined") return "/";
  return window.location.pathname;
}

export function createGameRuntime(): GameRuntime {
  let route = currentPath();
  let tick = 0;
  let frame: number | null = null;
  const listeners = new Set<RuntimeListener>();

  const notify = (): void => {
    for (const listener of Array.from(listeners)) {
      listener();
    }
  };

  const runtime: GameRuntime = {
    getRoute: () => route,
    getTick: () => tick,
    subscribe: (listener: RuntimeListener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    navigate: (path: string) => {
      route = path;
      notify();
    },
    start: () => {
      if (frame !== null) return;
      if (typeof window === "undefined" || typeof window.requestAnimationFrame !== "function") return;
      const loop = (): void => {
        tick += 1;
        frame = window.requestAnimationFrame(loop);
      };
      frame = window.requestAnimationFrame(loop);
    },
    stop: () => {
      if (frame === null) return;
      if (typeof window !== "undefined" && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(frame);
      }
      frame = null;
    },
  };

  return runtime;
}

export const gameRuntime = createGameRuntime();
