import styles from './EmployeeDashboard.css';
import React, { Component } from 'react';
import Logo from "../Logo.png";
import Avatar from "../avatar.png";
import Graph from "../performancegraph.png";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Navbar, NavbarBrand, CardFooter, CardHeader, Progress } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle, Button, Col,Input} from 'reactstrap';

class EmployeeDashboard extends Component {
  state = {
    username: "",
    useremail:"",
    useraddress:"",
    userdob:"",
    joinedDate: "",
    department: "",
    gender: "",
    contactNumber: "",
  };


  render() {

    const { username,useremail, useraddress,userdob, joinedDate, department, gender, contactNumber} = this.state;

    return (
      <div id="maindiv">
        <Navbar dark className="col-12 col-md-12" collapseOnSelect expand="lg" style={{backgroundColor:"#212121"}}>
          <div className={styles.container} >
            <NavbarBrand href="/" style={{textAlign:"left"}}>
                    <img id="img-logo" src={Logo} alt="" />
                     Code Quality Insight
            </NavbarBrand>
          </div>
        </Navbar>

        <div className="row row-header col-12" style={{paddingLeft:"110px", paddingTop:"25px"}}>
          <div row className="col-12 col-4 col-sm align-self-center">
                <Card className="text-left" border="primary" id="cardbody">
                    <CardHeader border="danger" id="title" > 
                          Personal Informations 
                          <img id="personalimg" src={Avatar} alt=" " />
                    </CardHeader>
                  <CardBody className="form-inline">              
                    <CardText id="cardtext" className="form-group"> 
                            <label for="name">Name:</label>
                              <Col md={10} className="form-control" >
                                <Input 
                                
                                  type="text"
                                  label = "User Email"
                                  placeholder="A. B. C. Perera"
                                  required="required"
                                  name="Username"
                                  value = {username}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>
                              
                            <label for="email">Email:</label>  
                              <Col md={10} className="form-control">
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "User Email"
                                  placeholder="abcpereracqiE@gmail.com"
                                  required="required"
                                  name="userEmail"
                                  value = {useremail}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>

                            <label for="address">Address:</label>  
                              <Col md={10} className="form-control" >
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "User Address"
                                  placeholder="No. 123A/19, 4th lane, Panadura"
                                  required="required"
                                  name="useraddress"
                                  value = {useraddress}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>
                            
                            <label for="dob">Date of Birth:</label>  
                              <Col md={10} className="form-control" >
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "Date of Birth"
                                  placeholder="13.10.1991"
                                  required="required"
                                  name="userdob"
                                  value = {userdob}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>

                            <label for="gender">Gender :</label>  
                              <Col md={10} className="form-control">
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "gender"
                                  placeholder="Male"
                                  required="required"
                                  name="gender"
                                  value = {gender}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>

                            <label for="department">Department :</label>  
                              <Col md={10} className="form-control" >
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "department"
                                  placeholder="Engineering"
                                  required="required"
                                  name="department"
                                  value = {department}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>
                            
                            <label for="dateOfJoined">Date of Joined :</label>  
                              <Col md={10} className="form-control" >
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "joineddate"
                                  placeholder="26.06.2019"
                                  required="required"
                                  name="joinedDate"
                                  value = {joinedDate}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>

                              <br/>
                      
                            <label for="contactNo">Contact Number :</label>  
                              <Col md={10} className="form-control">
                                <Input 
                                  className={styles.content}
                                  type="text"
                                  label = "contactNo"
                                  placeholder="0771234567"
                                  required="required"
                                  name="contactNumber"
                                  value = {contactNumber}
                                  onKeyDown={this.handleKeyPressed}
                                  onChange={this.handleInputChane}
                                />
                              </Col>
                    </CardText>
                  </CardBody> 

                  <CardFooter>
                    <small className="text-muted">
                        <Button color="secondary" > Update</Button>
                    </small>
                  </CardFooter>
                </Card>
          </div>
            

            <div className=" row col-6" style={{paddingLeft:"38px"}} >
              <div className="col-12 col-12 col-sm-12" id="performanceindicator">
                  <Card className="text-left" style={{backgroundColor:"#A0DAA9", height:"300px"}}>
                  <CardBody>
                    <CardText>
                      <CardTitle>
                        Performance Progress
                      </CardTitle>
                      <img id="graph" src={Graph} alt=" " />

                    </CardText>
                  </CardBody>
                </Card>
              </div> 

              <div className="col-12 col-4 col-sm-6 col-sm" id="headerdiv">
                <Card className="text-left" style={{backgroundColor:"#E0E0E0"}}>
                  <CardBody>
                    <CardText>
                      <CardTitle>
                        Projects
                      </CardTitle>
                        18
                    </CardText>
                  </CardBody>
                </Card>
              </div>  

              <div className="col-12 col-4 col-sm-6 col-sm" id="headerdiv" style={{paddingLeft:"20px"}}>
                <Card className="text-left" style={{backgroundColor : "#c0ded9"}}>
                  <CardBody>
                    <CardText>
                      <CardTitle>
                        Attendance
                      </CardTitle>
                        90%
                    </CardText>
                  </CardBody>
                </Card>
              </div>  

              <div className="col-12 col-4 col-sm-6 col-sm" id="headerdiv">
                <Card className="text-left" style={{backgroundColor : "#878f99"}}>
                  <CardBody>
                    <CardText>
                      <CardTitle>
                        Tasks Done
                      </CardTitle>
                        125
                    </CardText>
                  </CardBody>
                </Card>
              </div>  

              <div className="col-12 col-4 col-sm-6 col-sm" id="headerdiv" style={{paddingLeft:"20px"}}>
                <Card className="text-left" style={{backgroundColor : "#a2b9bc"}} >
                  <CardBody>
                    <CardText>
                      <CardTitle>
                        Complaints
                      </CardTitle>
                        7
                    </CardText>
                  </CardBody>
                </Card>
              </div> 


              <div className="col-12 col-4 col-sm align-self-center">
                <Card className="text-center" border="primary" id="cardbody">
                    <CardHeader border="danger" id="title" > 
                          Achievement Target
                          <img id="personalimg" src={Avatar} alt=" " />
                    </CardHeader>
                  <CardBody>                            
                      <CardText id="cardtext"> 
                        Finish 100 tasks
                        <Progress color="primary" value="50">  </Progress>

                        <br/>
                        
                        Get 100% Attendance
                        <Progress color="danger" value="90">   </Progress>

                        <br/>
  
                        Meet deadlines
                        <Progress color="warning" value="75">   </Progress>
                        
                        <br/>

                        Get less than 10 Complaints
                        <Progress color="success" value="96">  </Progress>

                      </CardText>
                  </CardBody> 

                  <CardFooter>
                      <small className="text-muted">
                      </small>
                  </CardFooter>
                </Card>
              </div> 
            </div>

          </div> 
      </div>
    );
  }
}

export default EmployeeDashboard;