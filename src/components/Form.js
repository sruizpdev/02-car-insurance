import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDiff } from '../helper';

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  color: white;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = () => {
  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: '',
  });

  const { brand, year, plan } = data;

  const getInfo = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [error, saveError] = useState(false);
  const calcInsurance = (e) => {
    e.preventDefault();
    if (brand.trim() === '' || (year.trim() === '') | (plan.trim === '')) {
      saveError(true);
      return;
    }
    let result = 2000;
    saveError(false);
    const diff = getYearDiff(year);
    result -= (diff * 3 * result) / 100;
    console.log(result);
  };
  return (
    <form onSubmit={calcInsurance}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Brand</Label>
        <Select name="brand" value={brand} onChange={getInfo}>
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getInfo}>
          <option value="">-- Year --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>{' '}
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === 'basic'}
          onChange={getInfo}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === 'full'}
          onChange={getInfo}
        />
        Full
      </Field>
      <Button type="submit">Calc</Button>
    </form>
  );
};

export default Form;
