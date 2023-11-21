// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

export const Cardsss = () => {
  return (
   <div className='container mt-4'>
    <h1 className='heading text-center text-danger'>realmes</h1>
    <div className="row row-col-1 row-col-sm-4 g-4">
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Xj3iq45pKoN9RdN3VDR_wgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title> realme 11</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 
 
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.deepspecs.com/wp-content/uploads/2020/04/realme-6pro-deepspecs-com-1024x1024.jpg" />
      <Card.Body>
        <Card.Title> realme 13 pro</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.gizchina.com/wp-content/uploads/images/2019/09/Realme-XT-1-1024x1006.jpg" />
      <Card.Body>
        <Card.Title> realme 13 pro max</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.VgeVNgP4cyDvS98en2kv1QHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title> realme 14</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>
 
 </div>
    </div>
    </div>
  )
}
