import {Card,Button} from 'react-bootstrap'
const MyCard = ({title,id, img,releaseDate,developer,description}) => {
    return(
        <Card style={{width: '18rem'}}>
            <Card.Header>{developer}</Card.Header>
            <Card.Img variant="top" img={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className='my-2 text-muted'>{developer}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Button variant='outline-warning d-flex '>Watch</Button>
            </Card.Body>
        </Card>
    )
}

export default MyCard