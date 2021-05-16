import React, { Component } from "react";
import styles from "./Homepage.css";
//import { Form, Button, FormGroup, Label, Input, Col } from 'reactstrap';

class Homepage extends Component{
    render(){
        return(
            <div>
                <div class="wrapper row0">
                    <div id="topbar" class="hoc clear"> 
                
                    <ul class="nospace">
                        <li><a href="/"><i class="fa fa-lg fa-home"></i></a></li>
                        <li><a href="/" title="Call Us"><i class="fa fa-phone"></i></a></li>
                        <li><a href="/" title="Send a Mail"><i class="fa fa-envelope-o"></i></a></li>
                        <li><a id="loginButton" title="Login"><i class="fa fa-lg fa-sign-in"></i></a></li>
                        <li><a href="/" title="Sign Up"><i class="fa fa-lg fa-edit"></i></a></li>
                    </ul>
                    
                    </div>
                </div>
            </div>
        );

    }
}

export default Homepage;