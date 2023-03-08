import { useState } from 'react';

function Calculator() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('+');

    const calculateResult = () => {
        let calculatedResult;
        if (operator === '+') {
            calculatedResult = value1 + value2;
        } else if (operator === '-') {
            calculatedResult = value1 - value2;
        } else if (operator === '*') {
            calculatedResult = value1 * value2;
        } else if (operator === '/') {
            calculatedResult = value1 / value2;
        }
        setResult(calculatedResult);
    };

    const clearResult = () => {
        setResult(0);
    };

    return (
        <div style={styles.container}>
            <input
                style={styles.input}
                type="number"
                placeholder="Enter a number"
                value={value1}
                onChange={(e) => setValue1(Number(e.target.value))}
            />
            <input
                style={styles.input}
                type="number"
                placeholder="Enter another number"
                value={value2}
                onChange={(e) => setValue2(Number(e.target.value))}
            />
            <div style={styles.operatorContainer}>
                <button style={styles.operatorButton} onClick={() => setOperator('+')}>
                    <span style={styles.operatorText}>+</span>
                </button>
                <button style={styles.operatorButton} onClick={() => setOperator('-')}>
                    <span style={styles.operatorText}>-</span>
                </button>
                <button style={styles.operatorButton} onClick={() => setOperator('*')}>
                    <span style={styles.operatorText}>X</span>
                </button>
                <button style={styles.operatorButton} onClick={() => setOperator('/')}>
                    <span style={styles.operatorText}>/</span>
                </button>
            </div>
            <button style={styles.button} onClick={calculateResult}>
                <span style={styles.buttonText}>Calculate</span>
            </button>
            <button style={styles.button} onClick={clearResult}>
                <span style={styles.buttonText}>Clear</span>
            </button>
            <p style={styles.resultText}>Result: {result}</p>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#fff',
        textAlign: 'left',
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ced4da',
        margin: 7,
        borderRadius: 5,
    },
    operatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        margin: 10,
    },
    operatorButton: {
        flex: 1,
        backgroundColor: '#0d6efd',
        padding: 10,
        margin: 5,
        borderWidth: 0
    },
    operatorText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        width: 200,
        backgroundColor: '#0d6efd',
        padding: 10,
        margin: 10,
        borderWidth: 0
    },
    buttonText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    resultText: {
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
        margin: 7,
    },
};

export default Calculator