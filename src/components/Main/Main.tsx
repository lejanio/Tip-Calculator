import React, { useEffect, useState } from 'react';
import './Main.scss';
import Input from '../Input/Input';
import personIcon from '../../assets/images/icon-person.svg';
import dollarIcon from '../../assets/images/icon-dollar.svg';
import Button from '../Button/Button';

const tipRates = [5, 10, 15, 25, 50];

type ReceiptInformationType = {
  billAmount: string;
  tipRate: string;
  peopleCount: string;
};

const receiptInformationInitialState = {
  billAmount: '',
  tipRate: '',
  peopleCount: '',
};

const resultingAmountsInitialState = {
  tipAmountPerPerson: 0,
  totalAmountPerPerson: 0,
};

const Main = () => {
  const [receiptInformation, setReceiptInformation] = useState<ReceiptInformationType>(receiptInformationInitialState);
  const [resultingAmounts, setResultingAmounts] = useState(resultingAmountsInitialState);
  const [showZeroError, setShowZeroError] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const chooseTipRate = (value: string) => {
    setReceiptInformation({ ...receiptInformation, tipRate: value });
  };

  const handleClick = (value: string) => {
    chooseTipRate(value);
    setActiveButton(+value);
  };

  const calculateAmountsPerPerson = () => {
    const { tipRate, billAmount, peopleCount } = receiptInformation;

    if (peopleCount === '0') {
      setShowZeroError(true);
      return;
    }

    const totalPerPerson = +billAmount / +peopleCount;
    const tipPerPerson = totalPerPerson * (+tipRate / 100);

    setShowZeroError(false);

    if (totalPerPerson === Infinity) {
      return;
    }

    setResultingAmounts({ tipAmountPerPerson: tipPerPerson, totalAmountPerPerson: totalPerPerson });
  };

  useEffect(() => {
    calculateAmountsPerPerson();
  }, [receiptInformation]);

  const displayTotal = (value: number) => (value
    ? value.toFixed(2)
    : '0.00');

  const handleDataReset = () => {
    setReceiptInformation(receiptInformationInitialState);
    setResultingAmounts(resultingAmountsInitialState);

    setActiveButton(0);
  };

  const receiptValuesInvalid = (receiptInformation.peopleCount === ''
      || receiptInformation.tipRate === ''
      || receiptInformation.billAmount === ''
      || receiptInformation.peopleCount === '0');

  return (
    <div className="main-section">

      <section className="main-section__input-part">
        <div className="input-part__item">
          <label htmlFor="amount">
            Bill
          </label>
          <Input
            name="billAmount"
            id="amount"
            value={receiptInformation.billAmount}
            onChange={(value) => {
              setReceiptInformation({ ...receiptInformation, billAmount: value });
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
                className="rate"
              >
                <Button
                  size="small"
                  active={(rate === activeButton)}
                  onClick={() => handleClick(String(rate))}
                >
                  {rate}
                  %
                </Button>
              </div>
            ))}
            <div className="rate">
              <Input
                name="tipRate"
                placeholder="Custom"
                value={(activeButton === 0) ? receiptInformation.tipRate : ''}
                onChange={(value) => {
                  chooseTipRate(value);
                  setActiveButton(0);
                }}
                height="2.70rem"
                fontSize="20px"
              />
            </div>
          </div>
        </div>
        <div className="input-part__item">
          <div className="error-message--wrapper">
            <label htmlFor="people-count">
              Number of People
            </label>
            <div>{showZeroError && (<span className="error-message">Can&apos;t be zero</span>)}</div>
          </div>
          <Input
            name="peopleCount"
            hasError={showZeroError}
            id="people-count"
            value={receiptInformation.peopleCount}
            onChange={(value) => {
              setReceiptInformation({ ...receiptInformation, peopleCount: value });
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
              {displayTotal(resultingAmounts.tipAmountPerPerson)}
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
              {displayTotal(resultingAmounts.totalAmountPerPerson)}
            </div>
          </div>
        </div>
        <div>
          <Button
            size="large"
            onClick={handleDataReset}
            disabled={receiptValuesInvalid}
          >
            RESET
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Main;
