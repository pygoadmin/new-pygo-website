import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const products = () => {
  return (
    <productsWrapper>
      <Layout>Products page</Layout>
    </productsWrapper>
  );
};

const productsWrapper = styled.div`
  height: 100vh;
  background: red;
`;

export default products;
