import { useState } from "react"
import { FloatingLabel, Form, Row, Col, Card, Button } from "react-bootstrap"
import Swal from "sweetalert2";

const CheckoutForm = ({saveOrder}) => {


    const buyAlert = Swal.mixin({
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        showClass: {
          popup: "animate__animated animate__backInRight animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__backOutRight",
        },
        timerProgressBar: "true",
        toast: true,
      });

    const [buyerData, setBuyerData] = useState({ 
        name:'', phone:'', email:'' 
    })

    const handleChange = (event) => {
        setBuyerData({
            ...buyerData, 
            [event.target.name]: event.target.value
        })
    }

    
    const handleSubmit = (event) => {

        if (buyerData.email !== buyerData.email2){ 
            alert('Sus correos electronicos deben coincidir.')
        }
        else {
            delete buyerData.email2 
            saveOrder(event, buyerData)
            buyAlert.fire({
                icon: "success",
                title: "Orden concretada. Espere ID de compra.",
              })
        }
        event.preventDefault()
        
    }

    return (
    <>
    <Card className="mx-auto" style={{ width: '40rem', margin:'20px'}}>
        <Form onSubmit={event => {handleSubmit(event)}} style={{ margin:'20px'}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupName">
                <FloatingLabel controlId="floatingInputName" label="Primer Nombre">
                    <Form.Control type="text" onChange={handleChange}  name='name' value={buyerData.name || ''} required placeholder="Federico Cermeno"/>
                </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGroupPhone">
                <FloatingLabel controlId="floatingInputPhone" label="Numero Telefonico">
                    <Form.Control type="tel" onChange={handleChange}  name='phone' value={buyerData.phone || ''} required placeholder="+54341924291"/>
                </FloatingLabel>
                </Form.Group>

            </Row>

            <Row >
                <Col md={8}>
            <Form.Group  controlId="formGroupEmail">
                <FloatingLabel controlId="floatingInputEmail" label="Correo Electronico">
                    <Form.Control type="email" onChange={handleChange}  name='email' value={buyerData.email || ''} required placeholder="nombre@example.com"/>
                </FloatingLabel>
            </Form.Group>
            </Col>
            
            </Row>
            <br/>
            <Form.Group  controlId="formGroupEmail">
                <FloatingLabel controlId="floatingInputEmail" label="Repetir Correo Electronico">
                    <Form.Control type="email" onChange={handleChange }  name='email2' value={buyerData.email2 || ''} required placeholder="name@example.com"/>
                </FloatingLabel>
            </Form.Group>
        <br/>
        <Button variant="outline-success" type="submit">Enviar</Button>
        </Form>
        </Card>
    
    </>
    
    )
}

export default CheckoutForm