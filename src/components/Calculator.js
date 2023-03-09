import { useState } from "react";

function Calculator() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("+");

  const calculateResult = () => {
    let calculatedResult;
    if (operator === "+") {
      calculatedResult = value1 + value2;
    } else if (operator === "-") {
      calculatedResult = value1 - value2;
    } else if (operator === "*") {
      calculatedResult = value1 * value2;
    } else if (operator === "/") {
      calculatedResult = value1 / value2;
    }
    setResult(calculatedResult);
  };

  const clearResult = () => {
    setResult(0);
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col-3">
          <input
            className="form-control"
            type="number"
            placeholder="Enter a number"
            value={value1}
            onChange={(e) => setValue1(Number(e.target.value))}
          />
        </div>

        <div className="col-3">
          <input
            className="form-control"
            type="number"
            placeholder="Enter another number"
            value={value2}
            onChange={(e) => setValue2(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => setOperator("+")}>+</button>
        </div>

        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => setOperator("-")}>-</button>
        </div>

        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => setOperator("*")}>*</button>
        </div>

        <div className="col-auto">
          <button className="btn btn-primary" onClick={() => setOperator("/")}>/</button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-3">
          <button className="btn btn-primary" onClick={calculateResult}>Calculate</button>
        </div>
        <div className="col-3">
          <button className="btn btn-primary" onClick={clearResult}>Clear</button>
        </div>
        <p className="col-12">Result: {result}</p>
      </div>
    </>
  );
}

export default Calculator;
