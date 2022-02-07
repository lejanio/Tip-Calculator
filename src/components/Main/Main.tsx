import React, { useEffect, useRef, useState } from 'react';
import './Main.scss';
import Input from '../Input/Input';
import personIcon from '../../assets/images/icon-person.svg';
import dollarIcon from '../../assets/images/icon-dollar.svg';
import Button from '../Button/Button';
import ButtonLarge from '../ButtonLarge/ButtonLarge';

const tipRates = [5, 10, 15, 25, 50];

type ReceiptInformationType = {
  billAmount: number;
  tipRate: number;
  peopleCount: number;
};

const receiptInformationInitialState = {
  billAmount: NaN,
  tipRate: NaN,
  peopleCount: NaN,
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

  // creating references, so that it is possible to reset input fields
  const billAmountRef = useRef<any | null>(null);
  const tipRateRef = useRef<any | null>(null);
  const peopleCountRef = useRef<any | null>(null);

  const chooseTipRate = (value: string) => {
    setReceiptInformation({ ...receiptInformation, tipRate: parseInt(value, 10) });
  };

  const handleClick = (value: string) => {
    chooseTipRate(value);
    setActiveButton(parseInt(value, 10));
  };

  const calculateAmountsPerPerson = () => {
    const { tipRate, billAmount, peopleCount } = receiptInformation;

    if (peopleCount === 0) {
      setShowZeroError(true);
      return;
    }

    const totalPerPerson = billAmount / peopleCount;
    const tipPerPerson = totalPerPerson * (tipRate / 100);

    setShowZeroError(false);
    setResultingAmounts({ tipAmountPerPerson: tipPerPerson, totalAmountPerPerson: totalPerPerson });
  };

  useEffect(() => {
    calculateAmountsPerPerson();
  }, [receiptInformation]);

  const handleDataReset = () => {
    setReceiptInformation(receiptInformationInitialState);
    setResultingAmounts(resultingAmountsInitialState);

    billAmountRef.current?.resetInput();
    tipRateRef.current?.resetInput();
    peopleCountRef.current?.resetInput();

    setActiveButton(0);
  };

  const receiptValuesInvalid = (Number.isNaN(receiptInformation.peopleCount)
      || Number.isNaN(receiptInformation.tipRate)
      || Number.isNaN(receiptInformation.billAmount)
      || receiptInformation.peopleCount === 0);

  return (
    <div className="main-section">

      <section className="main-section__input-part">
        <div className="input-part__item">
          <label htmlFor="amount">
            Bill
          </label>
          <Input
            ref={billAmountRef}
            name="billAmount"
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
                className="rate"
              >
                <Button
                  className={(rate === activeButton) ? 'active' : ''}
                  onClick={() => handleClick(String(rate))}
                >
                  {rate}
                  %
                </Button>
              </div>
            ))}
            <div className="rate">
              <Input
                ref={tipRateRef}
                name="tipRate"
                placeholder="Custom"
                getInputValue={(value) => {
                  chooseTipRate(value);
                  setActiveButton(0);
                }}
                style={{ height: '2.70rem', fontSize: '20px' }}
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
            ref={peopleCountRef}
            name="peopleCount"
            isValidationError={showZeroError}
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
                : '0.00'}
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
              {resultingAmounts.totalAmountPerPerson
                ? resultingAmounts.totalAmountPerPerson.toFixed(2)
                : '0.00'}
            </div>
          </div>
        </div>
        <div>
          <ButtonLarge
            onClick={handleDataReset}
            disabled={receiptValuesInvalid}
          >
            RESET
          </ButtonLarge>
        </div>
      </section>

    </div>
  );
};

export default Main;
