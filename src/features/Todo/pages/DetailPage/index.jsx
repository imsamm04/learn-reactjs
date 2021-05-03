import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import AddToCardForm from 'features/product/componetns/AddToCardForm';
import ProductInfo from 'features/product/componetns/ProductInfo';
import ProductThumbnail from 'features/product/componetns/ProductThumbnail';
import useProductDetail from 'features/product/hooks/useProductDetail';
import React from 'react';
import { useRouteMatch } from 'react-router';


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
}));

function DetailPage() {
  const classes = useStyles();
  const {
    params: {productId},
  } = useRouteMatch();
  const {product, loading} = useProductDetail(productId)

  if(loading) {
    return <Box>Loading</Box>
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
      </Container>
    </Box>
  );
}

export default DetailPage;
