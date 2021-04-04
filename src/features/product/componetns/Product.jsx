import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail ?.url}`
    : 'https://via.placeholder.com/444'
  return (
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
        
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">{product.salePrice} -{product.promotionPercent}</Typography>
      </Box>
  );
}

export default Product;
