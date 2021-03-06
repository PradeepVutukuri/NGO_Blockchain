


import React from 'react';

import './login/vendor/mdi-font/css/material-design-iconic-font.min.css'
import './login/vendor/font-awesome-4.7/css/font-awesome.min.css'
import './login/vendor/select2/select2.min.css'
import './login/vendor/datepicker/daterangepicker.css'
import './login/css/main.css'


class Donor extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          
           
            //this.props.history.push(`/donorv1`)
          
        
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      
      

     
      

      if (!fields["wallet"]) {
        formIsValid = false;
        errors["wallet"] = "*Please enter your Wallet address.";
      }
      
      
     

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
      <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
      <div className="wrapper wrapper--w680">
        <div className="card card-1">
          <div className="card-heading" />
          <div className="card-body">
     <div id="register">
        <h1 style ={{color:"skyblue",fontSize:"30px", marginLeft:"150px"}}>Verification </h1>
        <br />
        <br />

        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       
        <div className="errorMsg" style ={{color:"red",fontSize:"20px"}}>{this.state.errors.last_name}</div>
        
        
        <label>Wallet address</label>
        <input type="text" name="wallet" value={this.state.fields.wallet} onChange={this.handleChange} />
       
        <div className="errorMsg" style={{ color: "red", fontSize: "20px" }}>{this.state.errors.wallet}</div>
        <input type="submit" className="button"  value="Login"/>
        
        </form>
    </div>
    </div>
    </div>
    </div>
    
</div>

      );
  }


}


export default Donor;