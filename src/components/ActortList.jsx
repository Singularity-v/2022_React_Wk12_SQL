import { Row, Col, Skeleton } from "antd";
import ActortItem from "./ActortItem";


export default function ActorList({ actors, isLoading }) {

  return (
    <Skeleton loading={isLoading}>
      <Row gutter={[32, 32]}>
        {actors.map(actor => (
          <Col
            key={actor.id}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            xxl={{ span: 8 }}
          >
            <ActortItem actor={actor} />
          </Col>
        ))}
      </Row>
    </Skeleton>
  );
}

