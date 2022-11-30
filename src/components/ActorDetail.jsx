import { Row, Col, Select, Skeleton } from "antd";

function ActorDetail({ actor, isLoading }) {

   return (
      <Skeleton loading={isLoading}>
         <img
            alt={actor.name}
            className="actor-image"
            src={actor.image}
         />
         <Row gutter={[32, 32]} style={{marginTop:"30px"}}>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 0 }} >
               <div className="actor-info--detail">
                  <h2 className="actor-category">
                     {actor.category}
                  </h2>
                  <h1 className="actor-name actor-name--large">
                     {actor.name}
                  </h1>
                  <p className="actor-description">{actor.description_long}</p>
               </div>
            </Col>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 10, offset: 1 }}>
               <img
               alt={actor.name}
               className="actor-intro-image"
               src={actor.image_2}
               />
            </Col>
         </Row>
      </Skeleton>
   );
}

export default ActorDetail;