import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
export const CarteStagiaireContact = () => {
    return (
        <Wrapper className='px-4'>
            <h2>Ginette Lebrun</h2>
            <div className='d-flex'>
                <Button variant='info' className='mr-4'> Contacter</Button>
                <Button variant='light-info'> Modifier</Button>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div``;
