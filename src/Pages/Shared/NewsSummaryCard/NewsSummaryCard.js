import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {FaStar} from 'react-icons/fa';

function NewsSummaryCard({ summaryNews }) {
    const { _id, title, author, image_url, details, total_view } = summaryNews;
    return (
        <Card className='mt-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image className='me-2' roundedCircle src={author?.img} width={50}></Image>
                    <p>{author?.name}</p>
                </div>
                <p>{total_view}</p>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p> : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <FaStar className='text-warning'/>
                <p>{total_view}</p>
            </Card.Footer>
        </Card>
    );
}

export default NewsSummaryCard;