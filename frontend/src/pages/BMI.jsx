import React, { useState, useEffect } from 'react';

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);
  const [category, setCategory] = useState('');

  const handleHeight = (e) => {
    const h = e.target.value;
    setHeight(h);
  };

  const handleWeight = (e) => {
    const w = e.target.value;
    setWeight(w);
  };

  useEffect(() => {
    const bmi1 = weight / (height / 100) ** 2;
    setBMI(bmi1.toFixed(2));
    const category = getBMICategory(bmi1);
    setCategory(category);
  }, [height, weight]);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="mt-4">
      <div className="d-flex align-items-center justify-content-center">
        <div className="card form-card border-color custom-bg" style={{ width: '25rem' }}>
          <div className="card-header text-center custom-bg">
            <h5 className="card-title text-color-1">BMI CALCULATOR</h5>
          </div>
          <div className="card-body text-color-1">
            <form>
              <div className="mb-3">
                <label htmlFor="height" className="form-label">
                  <b>Height (cm)</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="height"
                  name="height"
                  placeholder="enter height.."
                  onChange={handleHeight}
                  value={height}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">
                  <b>Weight (kg)</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  name="weight"
                  placeholder="enter weight.."
                  onChange={handleWeight}
                  value={weight}
                />
              </div>
            </form>

            <div className="text-center">
              <h2>BMI : {bmi}</h2>
              <p>Category: {category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;