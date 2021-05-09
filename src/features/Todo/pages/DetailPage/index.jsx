import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import { Router } from '@material-ui/icons';
import AddToCardForm from 'features/product/componetns/AddToCardForm';
import ProductAdditional from 'features/product/componetns/ProductAdditional';
import ProductDescription from 'features/product/componetns/ProductDescription';
import ProductInfo from 'features/product/componetns/ProductInfo';
import ProductMenu from 'features/product/componetns/ProductMenu';
import ProductReviews from 'features/product/componetns/ProductReviews';
import ProductThumbnail from 'features/product/componetns/ProductThumbnail';
import useProductDetail from 'features/product/hooks/useProductDetail';
import React from 'react';
import { Component } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';


DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5)
  },

  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
  }
}));


function DetailPage() {
  const classes = useStyles();
  const {
    params: {productId},
    url,
  } = useRouteMatch();
  const {product, loading} = useProductDetail(productId)

  if(loading) {
    return <Box className={classes.loading}>
      <LinearProgress />
    </Box>
  }


  const handleAddToCartSubmit = (formValues) => {
    console.log('Form submit', formValues);
  }


  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product}/>
            </Grid>
            <Grid container item className={classes.right}>
              <ProductInfo product={product}/>
              <AddToCardForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
