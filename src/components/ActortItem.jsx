import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ActorItem({ actor }) {
    return (
        <Card className="bg-gray product">
            <Link to={`/products/id/${actor.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={actor.image}
                    alt={actor.name} />
            </Link>
            <div className="product-info">
                <h6 className="product-category">
                    {actor.category}
                </h6>
                <h2 className="product-name">
                    {actor.name}
                </h2>
                <p className="product-description">
                    {actor.description}
                </p>
                <div className="product-more">
                    <Link to={`/products/id/${actor.id}`} className="product-link">
                        What's More ...
                    </Link>
                </div>
            </div>
        </Card>
    );
}
