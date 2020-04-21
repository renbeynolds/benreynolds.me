import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import seedrandom from 'seedrandom';
import { Page } from '../../Components/Common/Page';
import { Banner } from '../../Components/Kodenames/Banner';
import { Board } from '../../Components/Kodenames/Board';
import { createCard, resetBoard, setBlueRemaining, setRedRemaining, setSpymaster } from '../../Redux/Actions/KodenamesActions';
import allWords from './words.json';

function Kodenames() {

    const dispatch = useDispatch();
    const boardNumber = useSelector(state => state.kodenames.get('boardNumber'));
    const reset = useSelector(state => state.kodenames.get('reset'));

    useEffect(() => {

            var rng = seedrandom(boardNumber);
    
            let colors = ['G'].concat(
                [...Array(8).keys()].map(i => 'R'),
                [...Array(8).keys()].map(i => 'B'),
                [...Array(7).keys()].map(i => 'Y'),
                [rng() > 0.5 ? 'R' : 'B']
            );
    
            dispatch(setRedRemaining(colors.filter(c => c === 'R').length));
            dispatch(setBlueRemaining(colors.filter(c => c === 'B').length));
    
            const words = [...allWords];
            for(let row=0; row < 5; row++) {
                for(let col=0; col < 5; col++) {
    
                    const colorIdx = Math.floor(rng() * colors.length);
                    const color = colors[colorIdx];
                    colors.splice(colorIdx, 1);
    
                    const wordIdx = Math.floor(rng() * words.length);
                    const word = words[wordIdx];
                    words.splice(wordIdx, 1);
    
                    dispatch(createCard(row, col, color, word));
                }
            }

            dispatch(setSpymaster(false));
            dispatch(resetBoard(false));

    }, [dispatch, boardNumber, reset])

    return (
        <Page>
            <Banner/>
            <Board/>
        </Page>
    );

}

export default Kodenames;