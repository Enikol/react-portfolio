import React from 'react';
import $ from 'jquery';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Form extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        name: '',
        email:'',
        message:'',
        canSubmit: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleTextChange(e) {
    this.setState({ message: e.target.value });
  }
 handleSubmit(){
   this.props.onInputSubmit({name: this.state.name,
                             email: this.state.email,
                             message: this.state.message});
   this.setState({  name: '',
     email:'',
     message:''})
 }

 getValidationState() {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if (!re.test(this.state.email)) {
     return 'error';
   } else {
     return 'success';
   }
 }

 render() {
   return (
         <form id='contactForm'>
         <FormGroup controlId="formName">
           <ControlLabel>Your Name</ControlLabel>
           <FormControl
           type="text"
            value={this.state.name}
            placeholder="Enter your name"
            onChange={this.handleNameChange} />
         </FormGroup>
         <FormGroup controlId='formEmail'
         validationState={this.getValidationState()}>
           <ControlLabel>Your Email</ControlLabel>
           <FormControl
           type="email"
            value={this.state.email}
            placeholder="Enter your enail"
            onChange={this.handleEmailChange} />
        <p className={'help'}>Must be a valid email address, otherwise I may not be able to contact you.</p>
         </FormGroup>
          <FormGroup controlId="formTextarea">
          <FormControl
          componentClass="textarea"
          value={this.state.message}
          onChange={this.handleTextChange}/>
          </FormGroup>
         <Button type="button"
         onClick={this.handleSubmit}>
          Submit
         </Button>
         </form>

   );
 }
}



export default Form;
/*<form action="mailto:enikolaenko330@gmail.com?subject=contact_through_website" enctype="text/plain" onsubmit="location.href='thanks.html';">
<FieldGroup
id="formName"
type="text"
label="Your name"
placeholder="Enter your name"
/>
 <FieldGroup
 id="formEmail"
 type="email"
 label="Your email address"
 placeholder="Enter your email"
 />
 <FormGroup controlId="formTextarea">
 <FormControl componentClass="textarea" />
 </FormGroup>
<Button type="submit">
  Submit
</Button>
</form>*/
