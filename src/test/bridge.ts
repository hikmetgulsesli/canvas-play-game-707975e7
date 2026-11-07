// Browser test bridge for the Setfarm runtime evidence contract.
//
//   globalName          -> __SETFARM_TEST_BRIDGE__
//   actionInvocation    -> invokeAction
//   scenarioMode global -> __SETFARM_SCENARIO_MODE__ = "manual"
//   stateBindings       -> /states/STATE_APP_STATE

import { STATE_APP_STATE_ID } from "../features/prod-canvas-play-game/prod-canvas-play-game.types";
import type { AppState } from "../features/prod-canvas-play-game/prod-canvas-play-game.types";

export const TEST_BRIDGE_GLOBAL = "__SETFARM_TEST_BRIDGE__";
export const SCENARIO_MODE_GLOBAL = "__SETFARM_SCENARIO_MODE__";
export const SCENARIO_MODE_MANUAL = "manual";

export interface ActionInvocationResult {
  actionRef: string;
  ok: boolean;
  status: "completed" | "unsupported";
}

export interface SetfarmTestBridge {
  invokeAction(actionRef: string, payload?: unknown): Promise<ActionInvocationResult>;
  states: { [STATE_APP_STATE_ID]?: AppState };
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: string;
  }
}

export interface TestBridgeHandlers {
  invokeAction(actionRef: string, payload?: unknown): Promise<ActionInvocationResult>;
  getState(): AppState;
}

export function installTestBridge(handlers: TestBridgeHandlers): () => void {
  if (typeof window === "undefined") return () => undefined;

  const bridge: SetfarmTestBridge = {
    invokeAction: (actionRef: string, payload?: unknown) => handlers.invokeAction(actionRef, payload),
    states: {},
  };

  window[TEST_BRIDGE_GLOBAL] = bridge;
  window[SCENARIO_MODE_GLOBAL] = SCENARIO_MODE_MANUAL;

  return () => {
    if (window[TEST_BRIDGE_GLOBAL] === bridge) {
      delete window[TEST_BRIDGE_GLOBAL];
    }
  };
}

/** Publishes the live application state to the bridge state binding. */
export function publishBridgeState(state: AppState): void {
  if (typeof window === "undefined") return;
  const bridge = window[TEST_BRIDGE_GLOBAL];
  if (!bridge) return;
  bridge.states = { ...bridge.states, [STATE_APP_STATE_ID]: state };
}
