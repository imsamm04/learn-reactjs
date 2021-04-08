import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductFilters from '../componetns/ProductFilters';
import ProductList from '../componetns/ProductList';
import ProductSkeletonList from '../componetns/ProductSkeletonList';
import ProductSort from '../componetns/ProductSort';



const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination : {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '50px',
    paddingBottom: '50px'
  },

}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 9,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'salePrice:ASC'
  })

useEffect(() => {
  (async () => {
    try{
      const {data, pagination} = await productApi.getAll(filters);
      setProductList(data);
      setPagination(pagination)
    }catch (error) {
      console.log('Failed to fetch product list', error);
    }
    
    setLoading(false);
  })();
}, [filters]);


const handlePageChange = (e, page) => {
  setFilters((prevFilters)=>({
    ...prevFilters,
    _page: page
  }));
};

const handleSortChange = (newSortValue) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    _sort: newSortValue,
  }));
}

const handleFilterChange = (newFilters) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    ...newFilters,
  }));
}

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
