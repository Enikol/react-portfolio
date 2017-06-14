import React from 'react';
import { Image } from 'react-bootstrap';
import Contact from './Contact';

class HomePage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    render() {
        return (
            <div id='home'>
            <Image src="/photo.jpg" id='photo' circle alt='placeholder'/>
            <div id="info">
            <h1> Ekaterina Nikolaenko </h1>
            <h2> Full-stack web developer </h2>
            <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in risus arcu. Phasellus auctor, turpis sit amet accumsan dictum, felis erat porta velit, sit amet efficitur eros metus sed purus. Sed eu ornare libero. Vivamus in sagittis ante. Nam a tellus id dui ullamcorper pulvinar. Nullam ultricies libero at est dapibus pretium sit amet a lacus. Mauris volutpat laoreet turpis, ac mollis neque imperdiet vitae. Etiam eleifend gravida aliquam. Aenean nec eleifend lectus, nec suscipit diam. </p>
            <Contact />
            </div>
            </div>
        );
    }
  }

  export default HomePage;
/*<div id='home' className='row'>
<Col sm={6} md={3}><Image src="http://localhost:8080/mini.png" responsive circle alt='placeholder'/></Col>
<Col sm={6} md={4}>
<h1> Ekaterina Nikolaenko </h1>
<h2> Full-stack web developer </h2>
<p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in risus arcu. Phasellus auctor, turpis sit amet accumsan dictum, felis erat porta velit, sit amet efficitur eros metus sed purus. Sed eu ornare libero. Vivamus in sagittis ante. Nam a tellus id dui ullamcorper pulvinar. Nullam ultricies libero at est dapibus pretium sit amet a lacus. Mauris volutpat laoreet turpis, ac mollis neque imperdiet vitae. Etiam eleifend gravida aliquam. Aenean nec eleifend lectus, nec suscipit diam. </p></Col>
</div>*/
