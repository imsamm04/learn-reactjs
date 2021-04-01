import React, {useEffect} from 'react';
import { Container, Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import productApi from 'api/productApi';


const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();

useEffect(() => {
  (async () => {
    const response = await productApi.getAll({ _page: 1, limit: 10});
    console.log({response});
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
            <Paper elevation={0}> Right column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
