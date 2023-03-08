import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            result: 0,
            operator: '+',
        };
    }

    setOperator = (operator) => {
        this.setState({
            operator,
        });
    };

    calculateResult = () => {
        const { value1, value2, operator } = this.state;
        let result;
        if (operator === '+') {
            result = value1 + value2;
        } else if (operator === '-') {
            result = value1 - value2;
        } else if (operator === '*') {
            result = value1 * value2;
        } else if (operator === '/') {
            result = value1 / value2;
        }
        this.setState({
            result,
        });
    };

    clearResult = () => {
        this.setState({
            result: 0,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter a number"
                    onChangeText={text => this.setState({ value1: Number(text) })}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter another number"
                    onChangeText={text => this.setState({ value2: Number(text) })}
                />
                <View style={styles.operatorContainer}>
                    <TouchableOpacity
                        style={styles.operatorButton}
                        onPress={() => this.setOperator('+')}
                    >
                        <Text style={styles.operatorText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.operatorButton}
                        onPress={() => this.setOperator('-')}
                    >
                        <Text style={styles.operatorText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.operatorButton}
                        onPress={() => this.setOperator('*')}
                    >
                        <Text style={styles.operatorText}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.operatorButton}
                        onPress={() => this.setOperator('/')}
                    >
                        <Text style={styles.operatorText}>/</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.calculateResult}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.clearResult}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
                <Text style={styles.resultText}>Result: {this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
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
        flexDirection: 'row',
        width: 200,
        margin: 10,
    },
    operatorButton: {
        flex: 1,
        backgroundColor: '#0d6efd',
        padding: 10,
        margin: 10,
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
});