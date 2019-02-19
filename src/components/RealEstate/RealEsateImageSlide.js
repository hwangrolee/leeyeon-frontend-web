import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

export default class RealEstateImageSlide extends Component {
    state = {
        animating: this.props.animaing || true,
        activeIndex: 0,
        imageLinks: this.props.imageLinks
    }

    onExiting = () => {
        this.setState({
            animating: true
        })
    }
    
    onExited = () => {
        this.setState({
            animating: false
        })
    }

    next = () => {
        const { animating, imageLinks, activeIndex } = this.state;

        if (animating) return;
        const nextIndex = activeIndex === imageLinks.length - 1 ? 0 : activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        const { animating, imageLinks, activeIndex } = this.state;

        if (animating) return;
        const nextIndex = activeIndex === 0 ? imageLinks.length - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        const { animating } = this.state;
        
        if (animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render () {
        const { activeIndex, imageLinks } = this.state;

        const slides = imageLinks.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
          });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={imageLinks} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        )
    }
}