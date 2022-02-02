import React from 'react';
import './Main.scss';

const Main = () => {
  console.log('Main');
  return (
    <div className="main-section">
      <div className="main-section__input-part">
        <div className="input-part__bill">
          <div>
            <label>
              Bill
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Select Tip %
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Number of People
              <input type="text" />
            </label>
          </div>
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
