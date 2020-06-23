import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContainerForm = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resume, saveResume] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    },
  });

  const { data, quotation } = resume;
  return (
    <Container>
      <Header title="Car Insurance App" />
      <ContainerForm>
        <Form saveResume={saveResume} />
        <Resume data={data} />
        <Result quotation={quotation} />
      </ContainerForm>
    </Container>
  );
}

export default App;
