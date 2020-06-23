import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { firstUppercase } from '../helper';

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: white;
  margin-top: 1rem;
`;
const Resume = ({ data }) => {
  const { brand, year, plan } = data;
  if ((brand === '' || year === '', plan === '')) {
    return null;
  }
  return (
    <ContainerResume>
      <h2>Quotation resume</h2>
      <ul>
        <li>Brand: {firstUppercase(brand)}</li>
        <li>Year: {year}</li>
        <li>Plan: {firstUppercase(plan)}</li>
      </ul>
    </ContainerResume>
  );
};

export default Resume;
