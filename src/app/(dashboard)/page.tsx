import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  ProgressBar,
} from 'react-bootstrap'

import React from 'react'
import UserChart from '@/components/Dashboard/UserChart'
import IncomeChart from '@/components/Dashboard/IncomeChart'
import ConversionChart from '@/components/Dashboard/ConversionChart'
import SessionChart from '@/components/Dashboard/SessionChart'
import TrafficChart from '@/components/Dashboard/TrafficChart'
import PlayerData from './PlayerData';
export default function Page() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <Card bg="primary" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  20%
                  <span className="fs-6 ms-2 fw-normal">
                    (-10.4%
                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                    )
                  </span>
                </div>
                <div>HeadShot</div>
              </div>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <UserChart />
            </div>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Card bg="info" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  37
                  <span className="fs-6 ms-2 fw-normal">
                    (top 9%
                    <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                    )
                  </span>
                </div>
                <div>Wins</div>
              </div>
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <IncomeChart />
            </div>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Card bg="warning" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  1.2
                  <span className="fs-6 ms-2 fw-normal">
                    (top 20%
                    <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                    )
                  </span>
                </div>
                <div>K.D ratio</div>
              </div>
              
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <ConversionChart />
            </div>
          </Card>
        </div>

        <div className="col-sm-6 col-lg-3">
          <Card bg="danger" text="white" className="mb-4">
            <CardBody className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  200
                  <span className="fs-6 ms-2 fw-normal">
                    (top 10%
                    <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                    )
                  </span>
                </div>
                <div>Damage/round</div>
              </div>
              
            </CardBody>
            <div className="mt-3 mx-3" style={{ height: '70px' }}>
              <SessionChart />
            </div>
          </Card>
        </div>
      </div>

      <Card className="mb-4">
        <CardBody>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="mb-0">Games</h4>
              <div className="small text-black-50">January - july 2024</div>
            </div>
            <div className="d-none d-md-block">
              <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
                <input
                  className="btn-check"
                  id="option1"
                  type="radio"
                  name="options"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
                <input
                  className="btn-check"
                  id="option2"
                  type="radio"
                  name="options"
                  autoComplete="off"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-secondary active"
                  htmlFor="option2"
                >
                  Month
                </label>
                <input
                  className="btn-check"
                  id="option3"
                  type="radio"
                  name="options"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
              </ButtonGroup>
              <Button variant="primary">
                <FontAwesomeIcon icon={faDownload} fixedWidth />
              </Button>
            </div>
          </div>
          <div
            style={{
              height: '300px',
              marginTop: '40px',
            }}
          >
            <TrafficChart />
          </div>
        </CardBody>
        <CardFooter>
          <div className="row row-cols-1 row-cols-md-5 text-center">
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Competetive</div>
              <div className="fw-semibold">24 (40%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="success"
                now={40}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Unranked</div>
              <div className="fw-semibold">12 (20%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="info"
                now={20}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Swiftplays</div>
              <div className="fw-semibold">47 (60%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="warning"
                now={60}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Death Matches</div>
              <div className="fw-semibold">45 (60%%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="danger"
                now={80}
              />
            </div>
            <div className="col mb-sm-2 mb-0">
              <div className="text-black-50">Spike Rush</div>
              <div className="fw-semibold">24 (40%)</div>
              <ProgressBar
                className="progress-thin mt-2"
                variant="primary"
                now={40}
              />
            </div>
          </div>
        </CardFooter>
      </Card>
      
    </>
  )
}
