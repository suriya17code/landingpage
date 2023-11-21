// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';

export const Cardss = () => {
  return (
   <div className='container mt-4'>
    <h1 className='heading text-center text-danger'>oppo phones</h1>
    <div className="row row-col-1 row-col-sm-4 g-4">
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i0.wp.com/witchdoctor.co.nz/wp-content/uploads/2019/10/Oppo-A9-2020-5.jpg?resize=1000%2C1000&ssl=1" />
      <Card.Body>
        <Card.Title> oppo 11</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 
 
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5YLyPzAKz9VA537lbv-orAHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title> oppo 13 pro</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.4gltemall.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo_reno_2_1__1.jpg" />
      <Card.Body>
        <Card.Title> oppo 13 pro max</Card.Title>
        <Card.Text>
         From ₹32,999
        </Card.Text>
         <center> <Button variant="primary">add to cart</Button></center>
      </Card.Body>
    </Card>

 </div>
 <div className="col">

 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i1.wp.com/www.reviewsrilanka.com/wp-content/uploads/2021/06/Oppo-Reno2-F.jpg?zoom=3&resize=150%2C150&ssl=1" />
      <Card.Body>
        <Card.Title> oppo 14</Card.Title>
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
