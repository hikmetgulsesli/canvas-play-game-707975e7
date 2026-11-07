# Design System: Canvas Play Game

**Stitch project:** 14503798057528554566
**Authority:** ProductSpec v2 plus browser-observed DesignInteractionGraph v2.

## Product screens
- Play page - Canvas Play Game (TARGET_PLAY_PAGE; source f14e2807a311462faeb19c8e712e4f02)

## Physical control slots
- CSLOT_START_GAME_START_BUTTON_PLACEMENT: Start game on SURF_PLAY_PAGE

## Implementation boundary
These files are accepted visual source, not executable application behavior. Every physical control is owned by its exact data-action and data-control-slot identity. Affected surfaces do not authorize additional controls. Routes, state transitions, persistence, reload behavior, and evidence predicates come from the sealed Product Build Packet, not from labels, inferred layout, or agent prose.

## Source policy
Only the selected response IDs in DESIGN_MANIFEST.json are canonical screens. STITCH_RENDERED_SEMANTICS_V2.json records the locked browser observation, STITCH_TARGET_CANDIDATE_SELECTION.json records exact qualification, and STITCH_RESPONSE_BINDINGS.json joins each target to the downloaded HTML and screenshot hashes. Unselected provider output is evidence only and cannot become implementation authority.
