export const playerCreate = player => ({
  type: 'PLAYER_CREATE',
  payload: player,
});

export const playerUpdate = player => ({
  type: 'PLAYER_UPDATE',
  payload: player,
});

export const playerDelete = player => ({
  type: 'PLAYER_DELETE',
  payload: player,
});
