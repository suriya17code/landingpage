// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

export const Cards = () => {
  return (
   <div className='container mt-4'>
    <h1 className='heading text-center text-danger'>i phones</h1>
    <div className="row row-col-1 row-col-sm-4 g-4">
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.BBjeLwCpYb22yGXbVwO6ugHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title> i phone 11</Card.Title>
        <Card.Text>
         From ₹132,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 
 
 <div className="col">

<Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Q6FT8punGZGSklG15Di_RgHaHa?rs=1&pid=ImgDetMain" />
     <Card.Body>
       <Card.Title> i phone 13 pro max</Card.Title>
       <Card.Text>
        From ₹202,999
       </Card.Text>
        <center> <Button variant="primary">add to cart</Button></center>
     </Card.Body>
   </Card>

</div>



 <div className="col ">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fix4less.com/wp-content/uploads/2021/08/iPhone-12-64GB-Blue-1164.00.png" />
      <Card.Body>
        <Card.Title> i phone 14</Card.Title>
        <Card.Text>
         From ₹252,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>
 
 </div>
    </div>
    </div>
  )
}
