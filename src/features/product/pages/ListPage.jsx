import React from 'react';
import { Container, Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

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
