import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import Sidebar from "../../../components/sidebar";
import Admin from "../../../components/admin";
import "react-rangeslider/lib/index.css";
import "./vitals.css";


class Vitals extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      height: 10,
      weight:20,
      temperature:30,
      bmi: 20,
      respiration: 15,
      pulse: 25,
      oxygen: 10,
      card: false
    }
  }
  

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChangeWeight = (weight) => {
    this.setState({
      weight: weight,
      card: 'weight'
    })
  };
  handleChangeHeight = (height) => {
    this.setState({
      height: height,
      card: 'height'
    })
  };
  handleChangeTemperature = (temperature) => {
    this.setState({
      temperature: temperature,
      card: 'temp'
    })
  };
  handleChangeBmi = (bmi) => {
    this.setState({
      bmi: bmi,
      card: 'bmi'
    })
  };
  handleChangeRespiration = (respiration) => {
    this.setState({
      respiration: respiration,
      card: 'respiration'
    })
  };
  handleChangePulse = (pulse) => {
    this.setState({
      pulse: pulse,
      card: 'pulse'
    })
  };
  handleChangeOxygen = (oxygen) => {
    this.setState({
      oxygen: oxygen,
      card: 'oxygen'
    })
  };
  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  
 
  sliderNode = null;

  render() {
    const { height } = this.state;
    const { weight } = this.state;
    const formatkg = weight => weight + ' kg'
    const { temperature } = this.state;
    const { bmi } = this.state;
    const { respiration } = this.state;
    const { pulse } = this.state;
    const { oxygen } = this.state;
    const { card } = this.state;
    console.log("card",card)
    return (
      <div className="row">
        <div className="col-lg-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-9">
          <Admin></Admin>
          <div className="col-lg-10 border-5">
            <h3 className="fw-bold">Vitals</h3>
            <div className="container vitals_detail m-5 p-3">
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Weight:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                >
                    <Slider
                        ref={(n) => (this.sliderNode = n)}
                        min={1}
                        max={150}
                        className={ 
                          card === 'weight' 
                            ? 'rangeslider_weight' 
                            : 'rangeslider_weight'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={weight}
                        format={formatkg}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeWeight}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Height:
                </label>
                <p className="col-md-4 col-lg-4 col-sm-12">
                    <Slider
                        min={140}
                        max={200}
                        className={ 
                          card === 'height' 
                            ? 'rangeslider_height' 
                            : 'rangeslider_height'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={height}
                        step={0.5}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeHeight}
                        onChangeComplete={this.handleChangeComplete}
                    />
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Temperature:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                    <Slider
                       min={96.0}
                       max={103}
                        className={ 
                          card === 'temp' 
                            ? 'rangeslider_temp' 
                            : 'rangeslider_temp'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={temperature}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeTemperature}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  BMI:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                    <Slider
                       min={18}
                       max={40}
                        className={ 
                          card === 'bmi' 
                            ? 'rangeslider_bmi' 
                            : 'rangeslider_bmi'
                        }
                        value={bmi}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeBmi}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Temp Method:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                  <label className="col-md-4 col-lg-4 col-sm-12 ">Oral</label>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  BMI Status:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  <label className="col-md-3 col-lg-6 col-sm-12 ">
                    Over weight
                  </label>
                </p>
              </div>

              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Respiration:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                    <Slider
                       min={1}
                       max={35}
                        className={ 
                          card === 'respiration' 
                            ? 'rangeslider_respiration' 
                            : 'rangeslider'
                        }
                        value={respiration}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeRespiration}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Blood Pressure:
                </label>
                <p className="col-md-1 col-lg-1 col-sm-12">
                  <input type="number" className="col-lg-12" placeholder="130" />
                </p>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <input type="number" className="col-lg-4" placeholder="80" />
                </p>
              </div>

              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Pulse:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                       min={35}
                       max={140}
                        className={ 
                          card === 'pulse' 
                            ? 'rangeslider_pulse' 
                            : 'rangeslider_pulse'
                        }
                        value={pulse}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangePulse}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  Oxygen Saturation:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                      min={80}
                      max={130}
                        className={ 
                          card === 'oxygen' 
                            ? 'rangeslider_oxygen' 
                            : 'rangeslider'
                        }
                        value={oxygen}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeOxygen}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <center>
              <button className=" btn btn-primary col-lg-1">Save</button>
              </center>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vitals;
