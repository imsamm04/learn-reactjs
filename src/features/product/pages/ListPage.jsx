import React, {useState ,useEffect} from 'react';
import { Container, Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import productApi from 'api/productApi';
import ProductSkeletonList from '../componetns/ProductSkeletonList';
import ProductList from '../componetns/ProductList';


const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true);

useEffect(() => {
  (async () => {
    try{
      const {data} = await productApi.getAll({ _page: 1, _limit: 10});
      setProductList(data);
    }catch (error) {
      console.log('Failed to fetch product list', error);
    }
    
    setLoading(false);
  })();
}, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
