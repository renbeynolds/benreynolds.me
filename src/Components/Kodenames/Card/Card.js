import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard } from '../../../Redux/Actions/KodenamesActions';
import './styles.scss';

function Card(props) {

    const dispatch = useDispatch();

    const { word, color, flipped } = useSelector(state => state.kodenames.get('cards')[props.row][props.col]);
    const spymaster = useSelector(state => state.kodenames.get('spymaster'));

    const cardClasses = classNames(
        'card__cell',
        color,
        { 'flipped': flipped, 'spymaster': spymaster }
    )

    const onClick = () => {
        if(!flipped) {
            dispatch(flipCard(props.row, props.col));
        }
    }

    return (
        <td className={cardClasses} onClick={onClick}>{word}</td>
    );

}

Card.propTypes = {
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired
}

export default Card;