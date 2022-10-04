import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import { imageUrl } from '../App';
let procId=0;

function Products() {
  const [url,seturl]=useState("");
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  async function getimage(id){
  const data=await fetch('https://fakestoreapi.com/products?limit=5');
  const jsondata=await data.json();
  console.log(jsondata)
  const imgurl=await jsondata[id].image;
  seturl(imgurl);
  const imgtitle=await jsondata[id].title;
  setTitle(imgtitle);
  const imgDescription=await jsondata[id].description;
  setDescription(imgDescription)

}
  
  useEffect(() => {
    getimage(procId);
  },[procId]);
  
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;