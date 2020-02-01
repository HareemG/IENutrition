import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import ielogo from '../images/ie_logo.jpg';

class LandingImage extends Component {
    render () {
        return (
            <div>
                <Container fixed>
                    <img src={ielogo} ></img>

                </Container>
            </div>
        );
    }
}

export default LandingImage;