import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


import './AllTopics.css';

const AllTopics = ({ topic }) => {
    const { id, name, logo } = topic;

    return (

        <div className='king'>

            <Card style={{ width: '18rem' }} className="bg-black cardWidth" >
                <Card.Img src={logo} />
                <Card.Body>
                    <Card.Title className='fonty'>{name}</Card.Title>

                    <h2 className='linkBtn'><Link to={`/topic/${id}`}>Start practice</Link></h2>
                </Card.Body>
            </Card>

        </div>

    );
}

export default AllTopics;