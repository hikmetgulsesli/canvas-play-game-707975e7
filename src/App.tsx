import { useEffect, useRef, useState } from "react";

import { PlayPageCanvasPlayGame } from "./screens/PlayPageCanvasPlayGame";
import { AppStateProvider, useAppState } from "./features/prod-canvas-play-game/prod-canvas-play-game.store";
import { PLAY_ROUTE_PATH, openPlayRoute } from "./features/surf-play-page/act_open_play";
import { gameRuntime } from "./game/game-runtime";
import { installTestBridge, publishBridgeState } from "./test/bridge";
import type { ActionInvocationResult } from "./test/bridge";

const ACT_OPEN_PLAY = "ACT_OPEN_PLAY";
const ACT_START_GAME = "ACT_START_GAME";

function PlayRoute() {
  const { state, startGame } = useAppState();
  return (
    <PlayPageCanvasPlayGame
      actions={{ "start-game-1": startGame }}
      score={state.currentScore}
      highScore={state.highScore}
      statusText={state.statusText}
      route={PLAY_ROUTE_PATH}
    />
  );
}

function AppShell() {
  const { state, startGame } = useAppState();
  const [route, setRoute] = useState<string>(() => gameRuntime.getRoute());

  const stateRef = useRef(state);
  const startGameRef = useRef(startGame);
  stateRef.current = state;
  startGameRef.current = startGame;

  useEffect(() => {
    const unsubscribe = gameRuntime.subscribe(() => setRoute(gameRuntime.getRoute()));
    return unsubscribe;
  }, []);

  useEffect(() => {
    const onPopState = (): void => {
      gameRuntime.navigate(window.location.pathname);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    gameRuntime.start();
    return () => gameRuntime.stop();
  }, []);

  useEffect(
    () =>
      installTestBridge({
        invokeAction: async (actionRef: string): Promise<ActionInvocationResult> => {
          if (actionRef === ACT_START_GAME) {
            startGameRef.current();
            return { actionRef, ok: true, status: "completed" };
          }
          if (actionRef === ACT_OPEN_PLAY) {
            openPlayRoute();
            return { actionRef, ok: true, status: "completed" };
          }
          return { actionRef, ok: false, status: "unsupported" };
        },
        getState: () => stateRef.current,
      }),
    [],
  );

  useEffect(() => {
    publishBridgeState(state);
  }, [state]);

  const normalizedRoute = route.length > 1 && route.endsWith("/") ? route.slice(0, -1) : route;
  const isPlayRoute = normalizedRoute === PLAY_ROUTE_PATH;

  return (
    <div
      data-setfarm-root={isPlayRoute ? "play-page" : "baseline"}
      data-testid="setfarm-app-root"
      className={
        isPlayRoute
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-slate-50 text-slate-950"
      }
    >
      {isPlayRoute ? <PlayRoute /> : null}
    </div>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <AppShell />
    </AppStateProvider>
  );
}
