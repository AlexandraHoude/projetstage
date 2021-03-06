/* eslint-disable no-restricted-imports */
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useSubheader } from '../../_metronic/layout';
import { ActivitesRecentes } from '../../components/ActivitesRecentes';
import { ApercuStagiaires } from '../../components/ApercuStagiaires';
import { CarteTuteur } from '../../components/cartes/CarteTuteur';
import { CommunauteAide } from '../../components/communauteAide/CommunauteAide';
import { GraphSante } from '../../components/graphiques/GraphSante';
import { GraphTaches } from '../../components/graphiques/GraphTaches';
import { InformationsGroupe } from '../../components/InformationsGroupe';
import { Icon } from '../image/dashboardIcon.png';


export const DashboardGroup = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle('Tableau de bord du groupe');

    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                    <InformationsGroupe  />
                    <ApercuStagiaires />
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={9} xl={9}>
                    <Grid container direction='column' className='p-5'>
                        <Grid item xs={12}>
                            <Grid container  className='pb-5' >
                                <Card className='bg-white d-flex'>
                                    <Card.Body className='d-flex'>
                                        <Image alt='icone' src={Icon} />
                                        <div>
                                            <h1 className='text-muted text-uppercase'>
                                                message important
                                            </h1>
                                            <p className='text-muted'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Fusce ullamcorper enim quis consectetur volutpat. Curabitur
                                                cursus metus nisi, in blandit ligula ornare a. Fusce
                                                facilisis, enim sit amet finibus suscipit, mi mi efficitur
                                                diam, a vulputate ante enim nec orci. Maecenas at dolor nec
                                                ligula auctor imperdiet id ut quam.
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container >
                                <Grid item xs={12} lg={8}>
                                    <Grid container className={matchesMD? 'pr-0':'pr-5'}>
                                        <Grid item xs={12}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}  md={6}>
                                                    <GraphTaches
                                                        className="card-stretch card-stretch-half gutter-b"
                                                        symbolShape="circle"
                                                        baseColor="success"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <GraphSante className="card-stretch card-stretch-half gutter-b" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <CommunauteAide />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} lg={4}  className={matchesMD? 'pt-5':'pt-0'}>
                                    <ActivitesRecentes className='h-100'/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className='pt-5'>
                                <Grid item xs={12}>
                                    <h1 className='text-muted'>Tuteurs du groupes : 1038</h1>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        {
                                            [1,2,3,4].map( item=>
                                                <Grid key={item} item xs={12} sm={6} md={6} lg={3}>
                                                    <CarteTuteur />
                                                </Grid>
                                            )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
};
