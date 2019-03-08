import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class RealEstateSummary extends Component {
    state = {
        fee: 0,
        imageLink: '',
        liked: false,
        address: {
            country: '',
            city: '',
            detail: '',
            zipCode: '',
        },
        type: '',
        roomCount: 0,
        keywords: [],
        price: 0,
        toggle: true
    }

    handleToggle = (e) => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    openWallet = (e) => {
        console.log('open wallet');

        // todo. open wallet
    }

    handleShowDetail = (e) => {
        console.log('show Detail');
    }

    render() {
        const { id, fee, imageLink, liked, address, type, price, keywords, toggle } = this.props.realEstate;
        const { country, city, detail, zipCode } = address; 
        const addressFullText = `${country} | ${city} | ${detail} | ${zipCode}`;
        return (
            <div></div>
            // <Card>
            //     <CardImg onClick={this.handleToggle} top width="10%" src={imageLink} alt="Card image cap"/>
            //     <CardBody onClick={this.handleToggle}>
            //         <CardTitle>{addressFullText}</CardTitle>
            //         <CardText>
            //             {keywords.join(' | ')}
            //         </CardText>
                    
            //     </CardBody>
            //     <hr/>
            //     <CardBody>
            //         {
            //             this.state.toggle === true ? 
            //             (<Row>
            //                 <Col md={4}>
            //                     <Label className="text-info">{price}ETH</Label>
            //                 </Col>
            //                 <Col md={8} className="text-right">
            //                     <Button type="button" color="primary" >Share</Button>
            //                 </Col>
            //             </Row>)
            //             : <Link className="col-12 btn btn-primary"  to={`detail/${id}`}>수수료: {fee}ETH | Pay for open</Link>
            //             // <Button className="col-12" type="button" color="primary" onClick={this.openWallet}>수수료: {fee}ETH | Pay for open</Button>
                        
            //         }
            //     </CardBody>
            // </Card>
        )
    }
}