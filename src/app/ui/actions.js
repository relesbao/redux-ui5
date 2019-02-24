export const UI = '[UI]';

export const UI_NAVIGATE = `${UI} Navigate`;

export const navTo = route => ({
  type: UI_NAVIGATE,
  route,
});
