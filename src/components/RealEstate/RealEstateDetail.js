import React, { Component } from 'react';
import { Form, FormGroup, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

export default class RealEstateDetail extends Component {
    state = {
        animating: true,
        realEstate: {
            imageLink: [
                'http://catalk.kr/wp-content/uploads/2018/07/Type-of-Housing.jpg',
                'http://catalk.kr/wp-content/uploads/2018/07/Type-of-Housing.jpg',
                'http://catalk.kr/wp-content/uploads/2018/07/Type-of-Housing.jpg',
            ]
        }
    }

    onExiting() {
        this.setState({
            animating: true
        })
      }
    
      onExited() {
        this.setState({
            animating: false
        })
      }

    render () {
        const { realEstate } = this.props;
        // const slides = realEstate.imageLinks.map(imageLink => {
        //     return (
        //         <CarouselItem
        //             onExiting={this.onExiting}
        //             onExited={this.onExited}
        //             key={realEstate.imageLink}
        //         >
        //             <img src={realEstate.imageLink}/>
        //         </CarouselItem>
        //     )   
        // })
        return (
            <div className="container">
                <Form>

                </Form>
            </div>
        )
    }
}