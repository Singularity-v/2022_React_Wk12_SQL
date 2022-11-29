import { useState } from "react";
import { Row, Col, Select, Skeleton } from "antd";

function ProductDetail({ product, isLoading }) {
   return (
      <Skeleton loading={isLoading}>
         <Row gutter={[32, 32]}>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 0 }}>
               <img
                  alt={product.name}
                  className="product-image"
                  src={product.image}
               />
            </Col>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 0 }} >
               <div className="product-info--detail">
                  <h2 className="product-category">
                     {product.category}
                  </h2>
                  <h1 className="product-name product-name--large">
                     {product.name}
                  </h1>
                  <p className="product-description">{product.description_long}</p>
                  <div className="product-price-wrap">
                     <p className="product-price product-price--large">
                        US${product.price}.00
                     </p>
                  </div>
               </div>
            </Col>
         </Row>
      </Skeleton>
   );
}

export default ProductDetail;