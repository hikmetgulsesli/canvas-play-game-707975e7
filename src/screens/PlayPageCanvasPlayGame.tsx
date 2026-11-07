// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Play Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasPlayGameActionId = "start-game-1";

export interface PlayPageCanvasPlayGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };
  /** Current score bound to OBS_START_GAME_OBS_CURRENT_SCORE_VALUE. */
  score?: number;
  /** Persisted high score bound to OBS_START_GAME_OBS_HIGH_SCORE_VALUE. */
  highScore?: number | null;
  /** Visible status message bound to OBS_START_GAME_OBS_STATUS_TEXT. */
  statusText?: string;
  /** Active route path bound to the route observables. */
  route?: string;
}

export type PlayPageCanvasPlayGameActionCallbacks = NonNullable<PlayPageCanvasPlayGameProps["actions"]>;

export function PlayPageCanvasPlayGame({ actions, score = 0, highScore = null, statusText = "", route }: PlayPageCanvasPlayGameProps) {
  const scoreValue = String(score);
  const highScoreValue = highScore === null || highScore === undefined ? "" : String(highScore);
  const highScoreText = highScore === null || highScore === undefined ? "—" : String(highScore);
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-setfarm-element-ref="E000001" data-observable-refs="OBS_OPEN_PLAY_OBS_PLAY_ROUTE_ENTRY OBS_START_GAME_OBS_STAY_ON_PLAY_ROUTE" data-route={route}>
          
          {/* Top Chrome / Decorative Branding Bar (non-actionable) */}
          <header className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">Canvas Play Game</span>
                <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">Arcade Session</span>
              </div>
            </div>
      
            {/* Live Dashboard Metrics / Observables */}
            <div className="flex items-center gap-6">
              {/* Score status observable */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl px-5 py-2.5 flex items-center gap-3 shadow-inner">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Score</span>
                <span className="text-2xl font-black tracking-tight text-sky-400 tabular-nums" data-setfarm-element-ref="E000002" role="status" aria-label="Score" data-observable-refs="OBS_START_GAME_OBS_CURRENT_SCORE_VALUE" data-value={scoreValue}>{scoreValue}</span>
              </div>
      
              {/* High score status observable */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl px-5 py-2.5 flex items-center gap-3 shadow-inner">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">High Score</span>
                <span className="text-2xl font-black tracking-tight text-amber-400 tabular-nums" data-setfarm-element-ref="E000003" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_OBS_HIGH_SCORE_VALUE" data-value={highScoreValue}>{highScoreText}</span>
              </div>
            </div>
          </header>
      
          {/* Subheader with Status & Primary Action Button */}
          <div className="py-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status:</span>
                {/* Game status observable */}
                <div className="inline-flex items-center text-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full" data-setfarm-element-ref="E000004" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_OBS_STATUS_TEXT">{statusText}</div>
              </div>
            </div>
      
            {/* Action Button Slot: CSLOT_START_GAME_START_BUTTON_PLACEMENT */}
            <div>
              <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON_PLACEMENT" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-colors duration-200 border border-indigo-400/30 cursor-pointer active:scale-95" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_OBS_START_BUTTON" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                <svg className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                </svg>
                <span>Start game</span>
              </button>
            </div>
          </div>
      
          {/* Main Game Area Container */}
          <main className="flex-1 flex flex-col mt-2">
            {/* Contained Surface: SURF_GAME_CANVAS */}
            <div data-surface-id="SURF_GAME_CANVAS" className="relative flex-1 min-h-[540px] w-full rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-2xl flex flex-col items-center justify-center p-6" data-setfarm-element-ref="E000006">
              {/* Canvas Grid Background Styling */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              {/* Ambient Glow Elements */}
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
      
              {/* Simulated Game Canvas Visual Scene */}
              <div className="relative z-10 flex flex-col items-center max-w-lg text-center">
                <div className="w-24 h-24 mb-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-sky-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                  </svg>
                </div>
      
                <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Interactive Game Canvas Ready</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Real-time HTML5 2D graphics viewport initialized for active gameplay. Session state and high score records are synchronized.
                </p>
      
                <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-2.5">
                    <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Framerate</span>
                    <span className="text-sm font-bold text-slate-200">60 FPS</span>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-2.5">
                    <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Mode</span>
                    <span className="text-sm font-bold text-slate-200">Standard</span>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-2.5">
                    <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Engine</span>
                    <span className="text-sm font-bold text-slate-200">Canvas2D</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
      
          {/* Footer Chrome (decorative, non-actionable) */}
          <footer className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
            <span>Canvas Play Game Engine</span>
            <span>Route: /play</span>
          </footer>
      
        </div>
    </>
  );
}
