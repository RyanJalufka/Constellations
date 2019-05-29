import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Image from '../images/staticStars.svg';

class ConstellationCard extends Component {

    render() {
        return (
            <div className='right'>
                {this.props.constellation.name === undefined ?
                    <div></div>
                    :
                    <div className="constellation">
                        <Card>
                            <Card.Img variant="top" src={Image}/>
                            <Card.Body>
                                <Card.Title>{this.props.constellation.name}</Card.Title>
                                <Card.Subtitle>Translation: {this.props.constellation.translation}</Card.Subtitle>
                                <Card.Text>
                                    Donec sagittis rutrum nisl vel sollicitudin. Duis sollicitudin felis in ultricies tristique. 
                                    Etiam vitae pharetra erat, tincidunt efficitur leo. Sed ultrices purus massa. Praesent eget laoreet dui. 
                                    Fusce tortor magna, aliquet vitae pellentesque vel, ultricies non lectus. Nam sit amet dignissim elit. 
                                    Nunc ex metus, commodo vitae faucibus ac, lacinia at orci. Ut id justo velit. Nunc ullamcorper tristique nulla, 
                                    ac tristique magna viverra sed. Quisque dignissim, massa sit amet malesuada egestas, orci lectus dictum dolor, 
                                    id cursus arcu tellus ac turpis. Fusce tellus justo, vulputate tempor est at, accumsan malesuada lacus. 
                                    Vestibulum velit tortor, ultrices id dignissim in, pharetra dictum sem. Duis eu hendrerit mauris. 
                                    Donec id dui non risus efficitur sollicitudin.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        constellation: state.constellation
    };
}

export default connect(mapStateToProps)(ConstellationCard);