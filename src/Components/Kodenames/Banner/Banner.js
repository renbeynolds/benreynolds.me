import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetBoard, setBoardNumber, setSpymaster } from '../../../Redux/Actions/KodenamesActions';
import './styles.scss';

function Banner() {

    const dispatch = useDispatch();
    const boardNumber = useSelector(state => state.kodenames.get('boardNumber'));
    const redRemaining = useSelector(state => state.kodenames.get('redRemaining'));
    const blueRemaining = useSelector(state => state.kodenames.get('blueRemaining'));

    const onBoardNumberChange = (event) => {
        event.persist();
        dispatch(setBoardNumber(Number(event.target.value)));
    }

    const onReset = () => {
        dispatch(resetBoard(true));
    }

    const onSpymaster = () => {
        dispatch(setSpymaster(true));
    }

    return (
        <div className='banner__wrap'>
            <div className='banner__title center-vertical'>KODENAMES</div>
            <div className='center-horizontal'>
                <div className='banner__red-remaining center-vertical'>{redRemaining}</div>
                <div className='banner__blue-remaining center-vertical'>{blueRemaining}</div>
            </div>
            <div className='center-horizontal'>
                <button className='banner__button' onClick={onReset}>
                    Reset
                </button>
                <button className='banner__button' onClick={onSpymaster}>
                    Spymaster
                </button>
                <div className='banner__board-number-label center-vertical'>
                    Board Number:
                </div>
                <div className='banner__board-number-input-wrap center-vertical'>
                    <input
                        className='banner__board-number-input'
                        type='number'
                        onChange={onBoardNumberChange}
                        value={boardNumber !== 0 ? boardNumber : null}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;