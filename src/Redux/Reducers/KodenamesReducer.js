import update from 'immutability-helper';
import { Map, set } from 'immutable';
import { Types as KodenamesTypes } from '../Actions/KodenamesActions';

const createGrid = () => {
    const grid = [];
    for(let row=0; row < 5; row++) {
        grid[row] = [];
        for(let col=0; col < 5; col++) {
            grid[row][col] = {};
        }
    }
    return grid;
}

const defaultState = Map({
    boardNumber: 1,
    cards: createGrid(),
    reset: true,
    spymaster: false
});

export default (state = defaultState, action) => {

    const { type, payload } = action;

    switch (type) {

        case KodenamesTypes.SET_BOARD_NUMBER: {
            return set(state, 'boardNumber', payload);
        }

        case KodenamesTypes.SET_RED_REMAINING: {
            return set(state, 'redRemaining', payload);
        }

        case KodenamesTypes.SET_BLUE_REMAINING: {
            return set(state, 'blueRemaining', payload);
        }

        case KodenamesTypes.CREATE_CARD: {
            const { row, col, color, word } = payload;
            const newCards = update(state.get('cards'), {[row]: {[col]: {$set: { word: word, color: color, flipped: false}}}});
            return set(state, 'cards', newCards);
        }

        case KodenamesTypes.FLIP_CARD: {
            const { row, col } = payload;
            const card = state.get('cards')[row][col];
            const newCards = update(state.get('cards'), {[row]: {[col]: {$set: {...card, flipped:!card.flipped}}}});
            state = set(state, 'cards', newCards);
            if(card.color === 'R') { state = set(state, 'redRemaining', state.get('redRemaining') - 1); }
            else if(card.color === 'B') { state = set(state, 'blueRemaining', state.get('blueRemaining') - 1); }
            return state;
        }

        case KodenamesTypes.RESET_BOARD: {
            return set(state, 'reset', payload);
        }

        case KodenamesTypes.SET_SPYMASTER: {
            return set(state, 'spymaster', payload);
        }

    default:
        return state;

    }
};
