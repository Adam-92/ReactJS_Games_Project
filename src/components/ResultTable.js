import React, { useState, useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'

const ResultTable = ( {result}) =>  {

    /* Points */
    const [points, setPoints] = useState(0)

    /* Add points in case of win */
    const addPoints = (result) => {
     return (result === 'You Win!') ? setPoints(prev=>prev + 1) : null
    }

    useEffect(()=> {
      addPoints(result)
    }, [result])
;
    return (
      <Row className="border-custom d-flex justify-content-between">
        <Col xs={8} className="py-3 ps-4">
          <p style={{ lineHeight: '80%'}} className="m-0 fs-2">ROCK</p>
          <p style={{ lineHeight: '80%'}} className="m-0 fs-2">PAPER</p>
          <p style={{ lineHeight: '80%'}} className="m-0 fs-2">SCISSORS</p>
          <p style={{ lineHeight: '80%'}} className="m-0 fs-2">LIZARD</p>
          <p style={{ lineHeight: '80%'}} className="m-0 fs-2">SPOCK</p>
        </Col>
        <Col xs={4} className="py-3 px-4">
          <div
            style={{ borderRadius: '0.7rem'}}
            className="bg-white 
                       h-100       
                       d-flex 
                       flex-column 
                       align-items-center 
                       justify-content-center"
          >
            <p style={{ fontSize: '1.3rem', letterSpacing: '2px', color: 'hsl(229, 64%, 46%)'}}>SCORE</p>
            <p style={{ fontSize: '4.2rem', lineHeight: '40%',  color: 'hsl(229, 25%, 44%)'}}>{points}</p>
          </div>
        </Col>
      </Row>
    );
}

export default ResultTable
