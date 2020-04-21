import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card';
import './styles.scss';

function Board() {

    const redRemaining = useSelector(state => state.kodenames.get('redRemaining'));
    const blueRemaining = useSelector(state => state.kodenames.get('blueRemaining'));

    const rows = [];
    for(let row=0; row < 5; row++) {
        const cards = [];
        for(let col=0; col < 5; col++) {
            cards.push(
                <Card
                    key={col}
                    row={row}
                    col={col}
                />
            );
        }
        rows.push(<tr key={row}>{cards}</tr>);
    }

    return (
        <div className='board__wrap'>
            <table className='board__table'>
                <tbody>
                    {rows}
                </tbody>
            </table>
            { redRemaining === 0 && 
                <div className='board__win red'>Red Wins!</div>
            }
            { blueRemaining === 0 && 
                <div className='board__win blue'>Blue Wins!</div>
            }
        </div>
    );

}

export default Board;