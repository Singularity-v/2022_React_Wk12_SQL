import { useState } from "react";
import { Row, Col, Select, Skeleton } from "antd";

function ActorDetail({ actor, isLoading }) {

   return (
      <Skeleton loading={isLoading}>
         <img
            alt={actor.name}
            className="product-image"
            src={actor.image}
         />
         <Row gutter={[32, 32]} style={{marginTop:"30px"}}>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 0 }} >
               <div className="product-info--detail">
                  <h2 className="product-category">
                     {actor.category}
                  </h2>
                  <h1 className="product-name product-name--large">
                     {actor.name}
                  </h1>
                  <p className="product-description">{actor.description_long}</p>
               </div>
            </Col>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
               <img
               alt={actor.name}
               className="product-intro-image"
               src={actor.sku}
               />
            </Col>
         </Row>
      </Skeleton>
   );
}

export default ActorDetail;