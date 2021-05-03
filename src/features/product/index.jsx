import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router';
import ListPage from '../product/pages/ListPage';
import { Box } from '@material-ui/core';
import DetailPage from 'features/Todo/pages/DetailPage';



function ProductFeature(props) {
const match = useRouteMatch();

    return (
        <div>
            <Box pt={4}>
                <Switch>
                    <Route path={match.url} exact component={ListPage} />
                    <Route path={`${match.url}/:productId`} component={DetailPage} />
                </Switch>
            </Box>
        </div>
    );
}

export default ProductFeature;