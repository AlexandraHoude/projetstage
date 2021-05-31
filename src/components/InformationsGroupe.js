import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styled from 'styled-components';

export const InformationsGroupe = () => {
    return (
        <Wrapper className='bg-danger px-3 pt-2 text-white'>
            <DropdownButton
                id='dropdown-item-button'
                title='Changer de groupe'
                className='text-right text-white pb-5 '
                variant='transparent-white'>
                <Dropdown.Item as='button'>Action</Dropdown.Item>
                <Dropdown.Item as='button'>Action 2</Dropdown.Item>
                <Dropdown.Item as='button'>Action 3</Dropdown.Item>
            </DropdownButton>
            <h2>Réseautique et support technique</h2>
            <br/>
            <p>
                Debut: <span>2021-05-13</span>
            </p>
            <p>
                Fin: <span>2021-07-13</span>
            </p>
            <p>
                Session: <span>été 2021</span>
            </p>
            <p>
                Stagiaires: <span>17</span>
            </p>
            <p>
                Type: <span>Alternance travail-étude</span>
            </p>
            <h1 className='text-right mb-0'>1038</h1>

        </Wrapper>
    );
};
const Wrapper = styled.div`
  p {
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
`;
