import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from "../App";
import { INFINITE_DIVIDE_INTO_ZERO_MESSAGE, operateNumbers } from '../functions/Events';

const setup = () => render(<App />);

describe('Basic testing for a calculator', () => {
  beforeEach(() => {
    act(() => {
      setup();
    })
  });

  test('Render without crash', () => {  
    const element = screen.getByTestId('title')
    expect(element.innerHTML).toEqual('A simple calculator')
  })

  test('Verify if number buttons are displayed', () => {
    const elements = screen.getAllByRole('button')
    const filteredNumberElements = elements.filter(el => !isNaN(el.innerHTML) ).map( el => parseInt(el.innerHTML) );

    for(let i = 0; i < 10; i++) {
      expect( filteredNumberElements.includes(i) ).toBe(true);
    }
    
  })

  test('Verify basic operations with an event function', () => {
    const sum = operateNumbers('5', '6', '+');
    expect(sum).toEqual(11);

    const sub = operateNumbers('5', '6', '-');
    expect(sub).toEqual(-1);

    const mul = operateNumbers('5', '6', '*');
    expect(mul).toEqual(30);

    const div = operateNumbers('5', '6', '/');
    expect(div.toFixed(2)).toEqual("0.83");
  })

  test('Try to divide into zero', () => {
    const div = operateNumbers('5', '0', '/');
    expect(div).toEqual(INFINITE_DIVIDE_INTO_ZERO_MESSAGE);
  })

  test('Try to put multiple operator symbols', () => {
    const elements = screen.getAllByRole('button')
    const otherElements = ['C', 'CE', '.'];
    const numberButtons = elements.filter(el => !isNaN(el.innerHTML) );
    const operatorButtons = elements.filter(el => isNaN(el.innerHTML) && !otherElements.includes(el.innerHTML) );

    act(() => {
      numberButtons[0].click();
      operatorButtons[0].click();
      operatorButtons[1].click();
      operatorButtons[2].click();
    })
    
    const calculatedValue = screen.getByTestId('displayText');
    const calculatedValueText = calculatedValue.textContent;
    
    const charBeforeOperator = calculatedValueText[calculatedValueText.length - 2];
    const lastChar = calculatedValueText[calculatedValueText.length];
    expect( !isNaN(charBeforeOperator) ).toBe(true);
    expect( isNaN(lastChar) ).toBe(true);
  })

  test('Clean screen after click on C', () => {
    const elements = screen.getAllByRole('button')
    const otherElements = ['C', 'CE', '.'];
    const numberButtons = elements.filter(el => !isNaN(el.innerHTML) );
    const operatorButtons = elements.filter(el => isNaN(el.innerHTML) && !otherElements.includes(el.innerHTML) );
    const equalOperator = elements.find(el => el.innerHTML === '=');
    const cleanButton = elements.find(el => el.innerHTML === 'C');

    act(() => {
      //Make an operation
      numberButtons[5].click();
      operatorButtons[0].click();
      numberButtons[2].click();
      operatorButtons[1].click();
      numberButtons[7].click();
      equalOperator.click();
    })
    
    let calculatedValue = screen.getByTestId('displayText');
    let calculatedValueText = calculatedValue.textContent;
    expect( !isNaN(calculatedValueText) ).toBe(true);
    
    act(() => {
      //Clean screen
      cleanButton.click();
    })

    calculatedValue = screen.getByTestId('displayText');
    calculatedValueText = calculatedValue.textContent;
    expect( calculatedValueText ).toEqual("");
  })
})