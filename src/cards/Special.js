// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

export const Special = () => {
  return (
   <div className='container mt-4'>
    <h1 className='heading text-center text-danger'>speical offers </h1>
    <div className="row row-cols-1  row-cols-md-3  g-4">
 
 
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://phonebox.com.mt/wp-content/uploads/2022/10/0021391_iphone-14.jpeg" />
      <Card.Body>
        <Card.Title> i phone 12</Card.Title>
        <Card.Text>
        From  ₹79,999
        </Card.Text>
       <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://phonebox.com.mt/wp-content/uploads/2022/11/0021403_iphone-14-pro.jpeg" />
      <Card.Body>
        <Card.Title> i phone 13 pro</Card.Title>
        <Card.Text>
        From ₹81,999 
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
        From ₹91,996
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 
    </div>
    </div>
  )
}
