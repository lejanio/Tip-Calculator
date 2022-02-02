import React from 'react';
import './Main.scss';
import Input from '../Input/Input';
import personIcon from '../../assets/images/icon-person.svg';
import dollarIcon from '../../assets/images/icon-dollar.svg';
import Button from '../Button/Button';

export const tipRates = [5, 10, 15, 25, 50];

const Main = () => {
  console.log('Main');
  return (
    <div className="main-section">

      <div className="main-section__input-part">
        <div className="input-part__item">
          <label htmlFor="amount">
            Bill
          </label>
          <Input id="amount" placeholder="0" icon={dollarIcon} />
        </div>
        <div className="input-part__item">
          <span>
            Select Tip %
          </span>
          <div className="rate-choice-section">
            {tipRates.map((rate) => (
              <div className="rate">
                <Button>
                  {rate}
                  %
                </Button>
              </div>
            ))}
            <div className="rate">
              <Input placeholder="Custom" style={{ width: '8rem', height: '2.70rem' }} />
            </div>
          </div>
        </div>
        <div className="input-part__item">
          <label htmlFor="person-count">
            Number of People
          </label>
          <Input id="person-count" placeholder="0" icon={personIcon} />
        </div>
      </div>

      <div className="main-section__output-part">
        <div>
          <div>
            <h2 className="label">
              Tip Amount
            </h2>
            <span>/person</span>
            <span>$0.00</span>
          </div>
          <div>
            <h2 className="label">
              Total
            </h2>
            <span>/person</span>
            <span>$0.00</span>
          </div>
        </div>
        <div>
          <button>RESET</button>
        </div>
      </div>

    </div>
  );
};

export default Main;
