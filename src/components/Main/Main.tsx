import React, { useEffect, useState } from 'react';
import './Main.scss';
import Input from '../Input/Input';
import personIcon from '../../assets/images/icon-person.svg';
import dollarIcon from '../../assets/images/icon-dollar.svg';
import Button from '../Button/Button';

export const tipRates = [5, 10, 15, 25, 50];

type ReceiptInformationType = {
  billAmount: number;
  tipRate: number;
  peopleCount: number;
}

const receiptInformationInitialState = {
  billAmount: 0,
  tipRate: 0,
  peopleCount: 0,
};

const resultingAmountsInitialState = {
  tipAmountPerPerson: 0,
  totalAmountPerPerson: 0,
};

const Main = () => {
  const [receiptInformation, setReceiptInformation] = useState<ReceiptInformationType>(receiptInformationInitialState);
  const [resultingAmounts, setResultingAmounts] = useState(resultingAmountsInitialState);

  const chooseTipRate = (value: string) => {
    setReceiptInformation({ ...receiptInformation, tipRate: parseInt(value, 10) });
  };

  const calculateAmountsPerPerson = () => {
    const { tipRate, billAmount, peopleCount } = receiptInformation;

    const totalPerPerson = billAmount / peopleCount;
    const tipPerPerson = totalPerPerson * (tipRate / 100);

    setResultingAmounts({ tipAmountPerPerson: tipPerPerson, totalAmountPerPerson: totalPerPerson });
  };

  useEffect(() => {
    calculateAmountsPerPerson();
  }, [receiptInformation]);

  console.log('receiptInformation', receiptInformation);
  console.log('resultingAmounts', resultingAmounts);

  return (
    <div className="main-section">

      <section className="main-section__input-part">
        <div className="input-part__item">
          <label htmlFor="amount">
            Bill
          </label>
          <Input
            id="amount"
            getInputValue={(value) => {
              setReceiptInformation({ ...receiptInformation, billAmount: parseInt(value, 10) });
            }}
            placeholder="0"
            icon={dollarIcon}
          />
        </div>
        <div className="input-part__item">
          <span>
            Select Tip %
          </span>
          <div className="rate-choice-section">
            {tipRates.map((rate) => (
              <div
                key={rate}
                onClick={() => chooseTipRate(String(rate))}
                className="rate"
              >
                <Button>
                  {rate}
                  %
                </Button>
              </div>
            ))}
            <div className="rate">
              <Input
                placeholder="Custom"
                getInputValue={(value) => chooseTipRate(value)}
                style={{ width: '8rem', height: '2.70rem' }}
              />
            </div>
          </div>
        </div>
        <div className="input-part__item">
          <label htmlFor="people-count">
            Number of People
          </label>
          <Input
            id="people-count"
            getInputValue={(value) => {
              setReceiptInformation({ ...receiptInformation, peopleCount: parseInt(value, 10) });
            }}
            placeholder="0"
            icon={personIcon}
          />
        </div>
      </section>

      <section className="main-section__output-part">
        <div className="output-part__items">
          <div className="output-part__item">
            <div className="label">
              <h2 className="label-heading">
                Tip Amount
              </h2>
              <span>/ person</span>
            </div>
            <div className="amount">
              $
              {resultingAmounts.tipAmountPerPerson
                ? resultingAmounts.tipAmountPerPerson.toFixed(2)
                : 0.00}
            </div>
          </div>
          <div className="output-part__item">
            <div className="label">
              <h2 className="label-heading">
                Total
              </h2>
              <span>/ person</span>
            </div>
            <div className="amount">
              $
              {typeof resultingAmounts.totalAmountPerPerson === 'number'
                ? resultingAmounts.totalAmountPerPerson.toFixed(2)
                : 0.00}
            </div>
          </div>
        </div>
        <div>
          <Button style={{ width: '100%', height: '2.50rem', backgroundColor: 'var(--primary)' }}>RESET</Button>
        </div>
      </section>

    </div>
  );
};

export default Main;
