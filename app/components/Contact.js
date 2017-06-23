import React from 'react';
import $ from 'jquery';
import { Modal, Button, closeButton, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Form from './Form';
import FontAwesome from 'react-fontawesome';

class Contact extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        showModal: false,
        showForm: true,
        messageToDisplay: "Thank you! I will be in touch with you soon."
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.sendData = this.sendData.bind(this);
  }

 close() {
   this.setState({ showModal: false });
 }

 open() {
   this.setState({ showModal: true });
 }
 sendData(formData){
   var self = this;
   console.log(formData);
   $.ajax({
    url: '/contactus',
    cache: false,
    type: 'POST',
    data: formData,
    success: function(data) {
      if (data.status === 200){
      self.setState({ showForm: false });
    } else {
      self.setState({ showForm: false,
                      messageToDisplay: 'Something went wrong! Please, try again.'});
    }
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(status, err.toString());
    }.bind(this)
 });

//this.close();
 }
 render() {

   return (
     <div>
      <Button
         id='contactButton'
         bsStyle="primary"
         bsSize="large"
         onClick={this.open}
       >
       <FontAwesome
     name='paper-plane'
   /> Hire Me
       </Button>

       <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title>Contact Me</Modal.Title>
         </Modal.Header>
         <Modal.Body>
        { this.state.showForm ? <Form onInputSubmit={this.sendData} /> : this.state.messageToDisplay }
         </Modal.Body>
       </Modal>
     </div>
   );
 }
}



export default Contact;
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
