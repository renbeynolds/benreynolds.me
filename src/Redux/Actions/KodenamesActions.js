export const Types = {
    SET_BOARD_NUMBER: 'SET_BOARD_NUMBER',
    SET_RED_REMAINING: 'SET_RED_REMAINING',
    SET_BLUE_REMAINING: 'SET_BLUE_REMAINING',
    CREATE_CARD: 'CREATE_CARD',
    FLIP_CARD: 'FLIP_CARD',
    RESET_BOARD: 'RESET_BOARD',
    SET_SPYMASTER: 'SET_SPYMASTER'
};

export const setBoardNumber = (boardNumber) => ({
    type: Types.SET_BOARD_NUMBER,
    payload: boardNumber
});

export const setRedRemaining = (count) => ({
    type: Types.SET_RED_REMAINING,
    payload: count
});

export const setBlueRemaining = (count) => ({
    type: Types.SET_BLUE_REMAINING,
    payload: count
});

export const createCard = (row, col, color, word) => ({
    type: Types.CREATE_CARD,
    payload: { 'row': row, 'col': col, 'color': color, 'word': word }
});

export const flipCard = (row, col) => ({
    type: Types.FLIP_CARD,
    payload: { 'row': row, 'col': col }
});

export const resetBoard = (value) => ({
    type: Types.RESET_BOARD,
    payload: value
});

export const setSpymaster = (value) => ({
    type: Types.SET_SPYMASTER,
    payload: value
})