import * as React from "react";
import { render } from "react-dom";
import Sidebar from "../../../components/sidebar";
import Admin from "../../../components/admin";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import "./vitals.css"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Vitals extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            experience: 0,
            dragging: false
        }
    }

    handleOnChange = (value) => {
        this.setState({
            experience: value
        })
    }

    sliderNode = null

    render() {
        let { experience } = this.state

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
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Weight:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div>
              </p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Height:
              </label>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div>
              </p>
            </div>
            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold p-1">
                Temperature:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div>
              </p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                BMI:{" "}
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div>
              </p>
            </div>
            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Temp Method:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
                {" "}
                <label className="col-md-3 col-lg-3 col-sm-12 ">
              Oral
              </label>
              </p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                BMI Status:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <label  className="col-md-3 col-lg-6 col-sm-12 ">Over weight</label>
               </p>
            </div>

            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Respiration:{" "}
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12"> <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div></p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Blood Pressure:
              </label>
              <p className="col-md-3 col-lg-4 col-sm-12">
                 
                  <input type="number" className="col-lg-4" placeholder="130"/>
                  <input type="number" className="col-lg-4" placeholder="80"/>
                
                  </p>
            </div>

            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Pulse:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">  <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div></p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Oxygen Saturation:{" "}
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12"> <div 
                
                onMouseEnter={() => { this.sliderNode.setState({ active: true }) }}
                onMouseLeave={() => { this.sliderNode.setState({ active: this.state.dragging }) }}>
                <Slider
                    ref={(n) => (this.sliderNode = n)}
                    min={1}
                    max={100}
                    value={experience}
                    onChange={this.handleOnChange}
                    onChangeStart={() => {this.setState({dragging: true})}}
                    onChangeComplete={() => {this.setState({dragging: false})}}
                   
                />
            </div></p>
            </div>
            <button className=" btn btn-primary col-lg-1">Save</button>
          </div>
        </div>
      </div>
    </div>








        )
    }
}


export default Vitals;
