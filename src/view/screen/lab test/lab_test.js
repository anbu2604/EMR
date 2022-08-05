import React from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./lab_test.css"
class Lab_test extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      weight: 0,
      height: 0,
      dragging: false,
    };
  }
  handleOnChange = (value) => {
    this.setState({
      weight: value,
      height: value,
    });
  };

  sliderNode = null;

  render() {
    let { weight } = this.state;
    let { height } = this.state;

    return (
      <div className="row">
        <div className="col-lg-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-9">
          <Admin></Admin>
          <div className="col-lg-10 border-5">
            <h3 className="fw-bold">Lab Test</h3>
            <div className="container vitals_detail m-5 p-3">
                <div className="row">
                <h5 className="fw-bold text-success">Liver Function</h5>
                </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                  ALT:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="alt"
                      ref={(n) => (this.sliderNode = n)}
                      min={1}
                      max={70}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                  AST:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="ast"
                      ref={(n) => (this.sliderNode = n)}
                      min={1}
                      max={55}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                ALP:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="alp"
                      ref={(n) => (this.sliderNode = n)}
                      min={30}
                      max={150}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Albumin:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="albumin"
                      ref={(n) => (this.sliderNode = n)}
                      min={2}
                      max={6}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Total protein:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className=" total_protein"
                      ref={(n) => (this.sliderNode = n)}
                      min={4}
                      max={8}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Bilirubin:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="bilirubin"
                      ref={(n) => (this.sliderNode = n)}
                      min={0}
                      max={2}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                GGT:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="ggt"
                      ref={(n) => (this.sliderNode = n)}
                      min={5}
                      max={80}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                LD:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="ld"
                      ref={(n) => (this.sliderNode = n)}
                      min={110}
                      max={240}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                PT:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="pt"
                      ref={(n) => (this.sliderNode = n)}
                      min={1}
                      max={20}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                </div>
                </div>
                <div className="container vitals_detail m-5 p-3">
                <div className="row">
                <h5 className="fw-bold text-success"> Lipid Profile</h5>
                </div>
                <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Cholesterol:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="cholesterol"
                      ref={(n) => (this.sliderNode = n)}
                      min={150}
                      max={270}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Triglycerides:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="triglycerides"
                      ref={(n) => (this.sliderNode = n)}
                      min={130}
                      max={500}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
               HDL Cholesterol:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="hdl"
                      ref={(n) => (this.sliderNode = n)}
                      min={20}
                      max={80}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                LDL Cholesterol:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="ldl"
                      ref={(n) => (this.sliderNode = n)}
                      min={40}
                      max={200}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Cholesterol/HDL ratio:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="hdl_ratio"
                      ref={(n) => (this.sliderNode = n)}
                      min={1}
                      max={8}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                </div>
                </div>
                <div className="container vitals_detail m-5 p-3">
                <div className="row">
                <h5 className="fw-bold text-success">  Blood Sugar Level</h5>
                </div>
                <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Fasting:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="fasting"
                      ref={(n) => (this.sliderNode = n)}
                      min={70}
                      max={160}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                After Eating:
                </label>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="after_eat"
                      ref={(n) => (this.sliderNode = n)}
                      min={165}
                      max={310}
                      value={height}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                After Meal(1-2hrs):
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="after_m"
                      ref={(n) => (this.sliderNode = n)}
                      min={110}
                      max={250}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
               A1c:
                </label>
                <br></br>
                <p className="col-md-3 col-lg-3 col-sm-12">
                  <div
                    onMouseEnter={() => {
                      this.sliderNode.setState({ active: true });
                    }}
                    onMouseLeave={() => {
                      this.sliderNode.setState({ active: this.state.dragging });
                    }}
                  >
                    <Slider className="a1c"
                      ref={(n) => (this.sliderNode = n)}
                      min={1}
                      max={8}
                      value={weight}
                      onChange={this.handleOnChange}
                      onChangeStart={() => {
                        this.setState({ dragging: true });
                      }}
                      onChangeComplete={() => {
                        this.setState({ dragging: false });
                      }}
                    />
                  </div>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lab_test;
