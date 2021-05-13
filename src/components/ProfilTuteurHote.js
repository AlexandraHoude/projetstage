/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import React from 'react';
import { useSubheader } from '../_metronic/layout';
import { CarteEntrepriseContact } from '../components/cartes/CarteEntrepriseContact';
import { CarteStagiaireContact } from '../components/cartes/CarteStagiaireContact';
import { CarteTuteur } from '../components/cartes/CarteTuteur';


export const ProfilTuteurHote = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle('Liste des stagiaires');



    return (
        <Grid container>
            <Grid item xs={12} className='mt-10' >
                <h1 className='text-muted px-4'>Profil</h1>
                <CarteStagiaireContact />
            </Grid>
            <Grid item xs={12}  className='mt-20'>
                <h1 className='text-muted px-4  mb-0'>Tuteur</h1>
                <CarteTuteur />
            </Grid>
            <Grid item xs={12}  className='mt-20'>
                <h1 className='text-muted px-4'>Hote</h1>
                <CarteEntrepriseContact />
            </Grid>
        </Grid>
    );
};
