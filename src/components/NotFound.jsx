import React from 'react'
import { Image, Row } from "react-bootstrap";
import NotFound1 from "../assets/404.gif";
const NotFound = () => {
  return (
    <div>
     <Row className="justify-content-center h-25 w-100">
    <Image src={NotFound1} className="h-25 w-50" alt="User not found" />
  </Row>
  </div>
  )
}

export default NotFound;