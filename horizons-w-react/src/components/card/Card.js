import React from 'react'
import "./Card.css"
import Card from 'react-bootstrap/Card';
import officespace1 from '../assets/officespace1.avif'
import officespace2 from '../assets/officespace2.avif'
import officespace3 from '../assets/officespace3.jpeg'
import officespace4 from '../assets/officespace4.jpg'


const CardView = () => {
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={officespace1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>


                </div>
                <div className="col-md-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={officespace2}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>




                </div>
                <div className="col-md-3">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={officespace3}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>



                </div>
                

                <div className="col-md-3 imgstyle">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={officespace4}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>



                </div>





            </div>



        </div>













    )
}

export default CardView
