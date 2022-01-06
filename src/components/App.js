import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ResultTable from "./ResultTable";
import Pentagram from "./Pentagram";
import MyModal from "./MyModal";
import Challange from "./Challenge";
import logic from "../utilis/utilis";

const App = () => {
  /* Modal - state */
  const [modalShow, setModalShow] = useState(false);
  /* Pick state*/
  const [yourPick, setYourPick] = useState("");
  /* Modal -Rules On/off */
  const modalOff = () => setModalShow(false);
  /* Select Your Pick */
  const selectPick = (name) => setYourPick(name);
  /* Restart Game */
  const restartGame = () => setYourPick("");
  /* Bring result and computer number from logic function */
  const { result, computerPick } = logic(yourPick);

  return (
    <>
      <Container fluid="xl" className="h-100">
        <Row className="justify-content-around align-items-center h-100">
          <Col
            sm={8}
            className="align-self-start align-self-sm-center mt-1 mt-sm-0"
          >
          <ResultTable result={result} />
          </Col>
          {/* Display if the condition is met */}
          <Col xs={12} className={`${!yourPick && "d-none"}`}>
            <Challange
              restartGame={restartGame}
              yourPick={yourPick}
              computerPick={computerPick}
              result={result}
            />
          </Col>
          <Col xs={12} className={`mt-lg-5 landscape ${yourPick && "d-none"}`}>
            <Pentagram selectPick={selectPick} />
          </Col>
          <Col
            xs={4}
            sm={3}
            className="mx-auto ms-lg-auto me-lg-0 mt-sm-5 mt-xxl-3"
          >
            <Button
              className={`btn-custom text-center ${yourPick && "d-none"}`}
              onClick={() => setModalShow(true)}
            >
              RULES
            </Button>
          </Col>
        </Row>
        <MyModal show={modalShow} onHide={modalOff} />
      </Container>
    </>
  );
};

export default App;
