import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router';
import ListPage from '../product/pages/ListPage';
import { Box } from '@material-ui/core';



function ProductFeature(props) {
const match = useRouteMatch();

    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} exact component={ListPage} />
                </Switch>
            </Box>
           
        </div>
    );
}

export default ProductFeature;