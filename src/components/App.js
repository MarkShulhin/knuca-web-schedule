import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import LessonsContainer from '../containers/LessonsContainer';
import SearchContainer from '../containers/SearchContainer';

import benefitsImage from '../img/benefits.png';
import monitorImage from '../img/search-monitor.png';
import tgPhonesImage from '../img/tg-phones.png';

import '../css/App.css';
import '../css/Grid.css';

const App = () => (
  <main id="main">
    <section id="search-bg">
      <Container>
        <Row>
          <Col className="search-container">
            <SearchContainer />
            <LessonsContainer />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="news-container">
      <Container>
        <Row className="news-item upper">
          <Col lg={6} className="upper-left">
            <img src={benefitsImage} alt="benefits" />
          </Col>
          <Col lg={{ size: 5, offset: 1 }} className="upper-right">
            <img src={monitorImage} alt="search monitor" />
          </Col>
        </Row>
        <Row className="news-item mid">
          <Col lg={7} className="mid-left">
            <img src={tgPhonesImage} alt="telegram bot on phones" />
          </Col>
          <Col lg={5} className="mid-right">
            <div className="text-block">
              <h2>Легко, швидко і точно</h2>
              <p>Телеграм бот відповість</p>
              <p>на всі ваші запити</p>
              <span>@Knuca_ScheduleBot</span>
              <Button
                  size="md"
                  color="info"
                  tag="a"
                  href="http://knuca.com"
                  className="text-block-link"
              >
              Приєднуйся
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
);


export default App;
