import React from 'react';
import { Button, Form } from 'react-bootstrap';
import jwt_decode from "jwt-decode";

const initialState = {
    Name:"",
    Price:"",
    Category:"",
    PicURL:"",
    NameError:"",
    PriceError:"",
    PicURLError:"",
    CategoryError:""
 }

export default class AddProduct extends React.Component {
    state = initialState;
    handleInputChange = (event, fieldName) => {
        this.setState({[fieldName] : event.target.value}); 
    }
    componentDidMount () {
        var token = window.localStorage.getItem('accessToken');
        var decoded = jwt_decode(token);
        if (decoded.Role === "Customer") {
            this.props.history.push('/unauthorized');
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            var token = window.localStorage.getItem('accessToken');
            console.log(token);
            const addRequest = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "Authorization" : `Bearer ${token}` },
                body: JSON.stringify({
                    Name : this.state.Name, 
                    Price : this.state.Price,
                    Category : this.state.Category,
                    PicURL : this.state.PicURL
                })
            };
            await fetch("https://localhost:44390/api/product/addProduct", addRequest);
            this.props.history.push('/allproducts');
        }

    }

    validate = () => {
        let NameError="";
        let PriceError="";
        let PicURLError="";
        let CategoryError="";

        if(!this.state.Name) {
            NameError="Name Field Cannot Be Empty";
        }
        if(!this.state.Price) {
            PriceError="Price Field Cannot Be Empty";
        }
        let isNum = /^\d+$/.test(this.state.Price);
        console.log(isNum);
        if (!isNum) {
            PriceError="Price Field Must Be Number";
        }
        if(!this.state.PicURL) {
            PicURLError="PicURL Field Cannot Be Empty";
        }
        if(!this.state.Category) {
            CategoryError="Choose a category";
        }
        if (CategoryError || NameError || PriceError || PicURLError) {
            this.setState({CategoryError,PriceError,NameError,PicURLError});
            return false;
        }
        return true;

    }

    render() {
        return (
            <div className="addProductForm">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control value={this.state.Name} placeholder="Enter Product Name" onChange={(event) => this.handleInputChange(event, 'Name')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.NameError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={this.state.Price} placeholder="Price" onChange={(event) => this.handleInputChange(event, 'Price')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.PriceError}</div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PicURL</Form.Label>
                        <Form.Control value={this.state.PicURL} placeholder="PicURL" onChange={(event) => this.handleInputChange(event, 'PicURL')} />
                        <div style={{color:'red', fontSize:14}}>{this.state.PicURLError}</div>
                    </Form.Group>
                    <br />
                    <Form.Control value={this.state.Category} as="select" onChange={(event) => this.handleInputChange(event, 'Category')}>
                        <option value="Category">Select Category</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sport">Sport</option>
                        <option value="Educational">Educational</option>
                        <option value="Vehicle">Vehicle</option>
                    </Form.Control>
                    <div style={{color:'red', fontSize:14}}>{this.state.CategoryError}</div>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );

    }

}