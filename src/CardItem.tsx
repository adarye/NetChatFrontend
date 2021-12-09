import * as React from 'react';
import {ICar} from './demo';

interface IProps{
    car: ICar;
  }
const CardItem: React.FC<IProps> = ({car}) => {
    return (
        <div className="card-item">
        <div className="card-item__image">
            <img src="https://via.placeholder.com/150" alt="Card item" />
        </div>
        <div className="card-item__content">
            <h3 className="card-item__title">{car.name}</h3>
            <p className="card-item__text">
           {car.year}
            </p>
        </div>
        </div>
    );
    }

    export default CardItem;