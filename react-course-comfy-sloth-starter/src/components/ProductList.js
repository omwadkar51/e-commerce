import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import product from "./Product";

const ProductList = () => {
  const {filtered_product, grid_view} = useFilterContext();
  if(product.length < 1){
    return <h5>Sorry, no products match your search</h5>
  }
  if(grid_view === false){
    return <ListView products={filtered_product}></ListView>
  }
  return (
      <GridView products={filtered_product}></GridView>
  );
}

export default ProductList
