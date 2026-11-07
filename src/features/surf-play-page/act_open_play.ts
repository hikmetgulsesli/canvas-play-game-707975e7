// ACT_OPEN_PLAY - "Open play page"
//
// Contract bindings:
//   trigger          -> route (ROUTE_PLAY_ROUTE)
//   navigation       -> route ROUTE_PLAY_ROUTE ("/play")
//   state deltas     -> none
//   affected surfaces-> SURF_PLAY_PAGE, SURF_GAME_CANVAS

import { gameRuntime } from "../../game/game-runtime";

export const PLAY_ROUTE_REF = "ROUTE_PLAY_ROUTE";
export const PLAY_ROUTE_PATH = "/play";

/**
 * Ensures the play route is the active route. The route is applied to the
 * address bar and published to the runtime so the route root surface renders.
 */
export function openPlayRoute(): string {
  if (typeof window !== "undefined" && window.location.pathname !== PLAY_ROUTE_PATH) {
    window.history.pushState({ route: PLAY_ROUTE_PATH }, "", PLAY_ROUTE_PATH);
  }
  gameRuntime.navigate(PLAY_ROUTE_PATH);
  return PLAY_ROUTE_PATH;
}
