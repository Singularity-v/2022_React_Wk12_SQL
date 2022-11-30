import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ActorItem({ actor }) {
    return (
        <Card className="bg-gray actor">
            <Link to={`/actors/id/${actor.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={actor.image}
                    alt={actor.name} />
            </Link>
            <div className="actor-info">
                <h6 className="actor-category">
                    {actor.category}
                </h6>
                <h2 className="actor-name">
                    {actor.name}
                </h2>
                <p className="actor-description">
                    {actor.description}
                </p>
                <div className="actor-more">
                    <Link to={`/actors/id/${actor.id}`} className="actor-link">
                        What's More ...
                    </Link>
                </div>
            </div>
        </Card>
    );
}
