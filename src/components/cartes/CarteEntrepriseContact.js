import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const CarteEntrepriseContact = () => {
    return (
        <>
            <Wrapper className='px-4 '>
                <p className=''>481 rue Saint-Joseph Est - 3e étage, Québec QC G1K 3B6</p>
                <br/>
                <p className=' mb-3'>(+1)581-701-8272</p>
                <p className=''>www.phenixweb.com</p>
                <h4 className='font-weight-bold mb-2'>Responsable du stagiaire : </h4>
                <p className=''>Samuel Caron</p>
                <p className=' mb-3'>s.caron@gmail.com</p>
                <Button variant='info'>Contacter</Button>
            </Wrapper>
        </>
    );
};
const Wrapper = styled.div`
  div {
    background-color: white;
  }
`;
