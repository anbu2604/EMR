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
  handleChangeSbp = (sbp) => {
    this.setState({
      sbp: sbp,
      card: 'sbp'
    })
  };
  handleChangeDbp = (dbp) => {
    this.setState({
      dbp: dbp,
      card: 'dbp'
    })
  };
  handleChangeHbA1c = (hba1c) => {
    this.setState({
      hba1c: hba1c,
      card: 'hba1c'
    })
  };
  handleChangeFs = (fs) => {
    this.setState({
      fs: fs,
      card: 'fs'
    })
  };
  handleChangePps = (pps) => {
    this.setState({
      pps: pps,
      card: 'pps'
    })
  };
  handleChangeRbs = (rbs) => {
    this.setState({
      rbs: rbs,
      card: 'rbs'
    })
  };
  handleChangeTc = (tc) => {
    this.setState({
      tc: tc,
      card: 'tc'
    })
  };
  handleChangeLdl = (ldl) => {
    this.setState({
      ldl: ldl,
      card: 'ldl'
    })
  };
  handleChangeHdl = (hdl) => {
    this.setState({
      hdl: hdl,
      card: 'hdl'
    })
  };
  handleChangeTgl = (tgl) => {
    this.setState({
      tgl: tgl,
      card: 'tgl'
    })
  };
  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  
 
  sliderNode = null;

  render() {
    const { height } = this.state;
    const { weight } = this.state;
    // const formatkg = weight => weight + ' kg'
    const { temperature } = this.state;
    const { bmi } = this.state;
    const { respiration } = this.state;
    const { pulse } = this.state;
    const { oxygen } = this.state ;
    // const fotmat_percentage = oxygen => oxygen + '%'
    const { sbp } = this.state;
    const { dbp } = this.state;
    const { hba1c } = this.state;
    const { fs } = this.state;
    const { pps } = this.state;
    const { rbs } = this.state;
    const { tc } = this.state;
    const { ldl } = this.state;
    const { hdl } = this.state;
    const { tgl } = this.state;
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
                        min={25}
                        max={250}
                        className={ 
                          card === 'weight' 
                            ? 'rangeslider_weight' 
                            : 'rangeslider_weight'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={weight}
                        step={0.1}
                        // format={formatkg}
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
                        min={100}
                        max={200}
                        className={ 
                          card === 'height' 
                            ? 'rangeslider_height' 
                            : 'rangeslider_height'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={height}
                        step={0.1}
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
                       step={0.01}
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
                       min={6}
                       max={40}
                        className={ 
                          card === 'respiration' 
                            ? 'rangeslider_respiration' 
                            : 'rangeslider_respiration'
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
                       min={20}
                       max={200}
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
                      min={40}
                      max={100}
                        className={ 
                          card === 'oxygen' 
                            ? 'rangeslider_oxygen' 
                            : 'rangeslider_oxygen'
                        }
                        value={oxygen}
                        // format ={fotmat_percentage}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeOxygen}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  SBP:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                       min={60}
                       max={200}
                        className={ 
                          card === 'pulse' 
                            ? 'rangeslider_sbp' 
                            : 'rangeslider_sbp'
                        }
                        value={sbp}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeSbp}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  DBP:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                      min={0}
                      max={160}
                        className={ 
                          card === 'dbp' 
                            ? 'rangeslider_dbp' 
                            : 'rangeslider_dbp'
                        }
                        value={dbp}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeDbp}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  HbA1c:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                       min={3}
                       max={25}
                        className={ 
                          card === 'hba1c' 
                            ? 'rangeslider_hba1c' 
                            : 'rangeslider_hba1c'
                        }
                        value={hba1c}
                        // format ={fotmat_percentage}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeHbA1c}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  FS:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                      min={20}
                      max={600}
                        className={ 
                          card === 'fs' 
                            ? 'rangeslider_fs' 
                            : 'rangeslider_fs'
                        }
                        value={fs}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeFs}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  PPS:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                       min={20}
                       max={600}
                        className={ 
                          card === 'pps' 
                            ? 'rangeslider_pps' 
                            : 'rangeslider_pps'
                        }
                        value={pps}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangePps}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  RBS:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                      min={20}
                      max={600}
                        className={ 
                          card === 'rbs' 
                            ? 'rangeslider_rbs' 
                            : 'rangeslider_rbs'
                        }
                        value={rbs}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeRbs}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  TC:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                       min={50}
                       max={1000}
                        className={ 
                          card === 'tc' 
                            ? 'rangeslider_tc' 
                            : 'rangeslider_tc'
                        }
                        value={tc}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeTc}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  LDL:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                      min={30}
                      max={500}
                        className={ 
                          card === 'ldl' 
                            ? 'rangeslider_ldl' 
                            : 'rangeslider_ldl'
                        }
                        value={ldl}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeLdl}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
              </div>
              <div className="row">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  HDL:
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                       min={20}
                       max={80}
                        className={ 
                          card === 'hdl' 
                            ? 'rangeslider_hdl' 
                            : 'rangeslider_hdl'
                        }
                        value={hdl}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeHdl}
                        onChangeComplete={this.handleChangeComplete}
                    />
                    
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  TGL:{" "}
                </label>
                <br></br>
                <p className="col-md-4 col-lg-4 col-sm-12">
                  {" "}
                    <Slider
                      min={20}
                      max={5000}
                        className={ 
                          card === 'tgl' 
                            ? 'rangeslider_tgl' 
                            : 'rangeslider_tgl'
                        }
                        value={tgl}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeTgl}
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
