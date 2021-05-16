import React, { Component } from "react";
import styles from "./Login.css"
import Logo from "../Logo.png";
import { isEmpty } from "lodash";
import { Form, Button, FormGroup, Label, Input, Col } from 'reactstrap';

class Login extends Component{
    constructor(props){
        super(props);
    }

  state = {
    username: "",
    password: "",
    isLoading: false,
    error: {
      status: false,
      message: ""
    },
    success: false
  };

  handleInputChange = ({ name, value }) => {
    this.setState({
      [name]: value,
      error: {
        status: false,
        message: ""
      }
    });
  };

  shouldSubmitDisable = () => {
    return isEmpty(this.state.username) || isEmpty(this.state.password);
  };

  handleKeyPressed = e => {
    if (e.event.key === "Enter" && !this.shouldSubmitDisable()) {
      this.handleSubmitClick();
    }
  };

  handleSubmitClick = async () => {
    const { username, password } = this.state;
    this.setState({ isLoading: true });

    try {
      //Replace this with api call
      //Or action
      if (username === "admin@gmail.com" && password === "admin") {
        this.setState({
          success: true
        });
      } else {
        this.setState({
          error: {
            status: true,
            message: "Invalid Credentials"
          }
        });
      }
    } catch (e) {
      this.setState({
        error: {
          status: true,
          message: e
        }
      });
    } finally {
      this.setState({
        isLoading: false
      });
    }
  };

    render(){

        const { username, password, isLoading, error, success } = this.state;

        return( 
            <div>

                
                <div className={styles.container}>
                    <div id="main-outer-div">
                        <div id="div-logo">
                            <img id="img-logo" src={Logo} alt="" />
                        </div>

                        <div id="title-div">
                            <h4 className={styles.title}>Sign in</h4>
                        </div>

                        <div id="outer-login-form-div" className="col-12 col-md-9">
                            <Form action="" method="" onSubmit={this.props.onSubmit}>
                                {/* user credential inputs */}
                                {/* <div className="form-group"> */}
                                <FormGroup row style={{alignContent:"center", textAlign:"left", marginLeft:"20px", marginTop:"20px", marginBottom:"20px"}}>
                                    <Label className={styles.content} htmlFor = "useremail">  Email</Label>
                                    <Col md={10}>
                                        <Input 
                                            className={styles.content}
                                            type="text"
                                            label = "User Email"
                                            placeholder="Email"
                                            required="required"
                                            name="Username"
                                            value = {username}
                                            onKeyDown={this.handleKeyPressed}
                                            onChange={this.handleInputChane}
                                        />
                                    </Col>
                                </FormGroup>
                                
                                {/* </div> */}
                                {/* <div className="form-group"> */}
                                <FormGroup row style={{alignContent:"center", textAlign:"left",marginLeft:"20px", marginTop:"20px", marginBottom:"20px"}}>
                                    <Label className={styles.content} htmlFor="passwordL"> Password </Label>
                                    <Col md={10}>
                                        <Input 
                                            className={styles.content}
                                            type="password"
                                            rows = "12"
                                            label="password"
                                            // className="form-control"
                                            placeholder="Password"
                                            required="required"
                                            value = {password}
                                            onKeyDown={this.handleKeyPressed}
                                            onChange={this.handleInputChane}
                                        />
                                    </Col>
                                </FormGroup>
                                

                                {/* </div> */}
                                {/* <div className="form-group"> */}
                                <FormGroup row style={{alignContent:"center", marginTop:"20px", marginBottom:"20px"}}>
                                    <Col md={{size: 10}}>
                                        <Button color="primary" type="submit" id="submitBtn">
                                                Sign in
                                        </Button>
                                    </Col>
                                </FormGroup>
                                
                                    
                                
                                {/* Forgot password */}
                                <FormGroup row style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>
                                    <Col md={{size: 10}}>
                                        <div className={styles.forgotPassword}>
                                            <span>
                                                forgot password?
                                            </span>
                                        </div>
                                    </Col>
                                </FormGroup>
                                

                                {/* show error message */}
                                {error.status && (
                                    <div className={styles.error}>{error.message}</div>
                                )}

                                {/* Show success Message */}
                                {success && (
                                    <div className={styles.success}>Login Successful!.</div>
                                )}

                                <FormGroup row style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>
                                    <Col md={{size:10}}>
                                        {/* </div> */}
                                        {!this.props.pass ? ( 
                                            <p row className={styles.alert}>Invalid User Name or Password</p>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                </FormGroup>
                                
                                
                            </Form>
                        </div>

                        <div className="loading">
                           
                        </div>

                     </div>
                </div>
            </div>
        );
    }
}

export default Login;