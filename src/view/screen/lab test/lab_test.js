import React from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./lab_test.css"
class Lab_test extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      alt: 20,
      ast:10,
      alp:10,
      fasting:50,
     
      
          card: false
    }
  }
  
  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChangeBmi = (alt) => {
    this.setState({
      alt: alt,
      card: 'alt'
    })
  };
  handleChangeAst = (ast) => {
    this.setState({
      ast: ast,
      card: 'ast'
    })
  };
  handleChangeAlp = (alp) => {
    this.setState({
      alp: alp,
      card: 'alp'
    })
  };
  handleChangeAlbumin = (albumin) => {
    this.setState({
      albumin: albumin,
      card: 'albumin'
    })
  };
  handleChangeTotal_protein= (total_protein) => {
    this.setState({
      total_protein: total_protein,
      card: 'total_protein'
    })
  };
  handleChangeBilirubin= (bilirubin) => {
    this.setState({
      bilirubin: bilirubin,
      card: 'bilirubin'
    })
  };
  handleChangeGgt= (ggt) => {
    this.setState({
      ggt: ggt,
      card: 'ggt'
    })
  };
  handleChangeLd= (ld) => {
    this.setState({
      ld: ld,
      card: 'ld'
    })
  };
  handleChangePt= (pt) => {
    this.setState({
      pt: pt,
      card: 'pt'
    })
  };
  handleChangeCholesterol= (cholesterol) => {
    this.setState({
      cholesterol: cholesterol,
      card: 'cholesterol'
    })
  };
    handleChangeTriglycerides = (triglycerides) => {
    this.setState({
      triglycerides: triglycerides,
      card: 'triglycerides'
    })
  };
  handleChangeHdl = (hdl) => {
    this.setState({
      hdl: hdl,
      card: 'hdl'
    })
  };
  handleChangeLdl = (ldl) => {
    this.setState({
      ldl: ldl,
      card: 'ldl'
    })
  };
  handleChangeHdl_ratio = (hdl_ratio) => {
    this.setState({
      hdl_ratio: hdl_ratio,
      card: 'hdl_ratio'
    })
  };
  handleChangeFasting = (fasting) => {
    this.setState({
      fasting: fasting,
      card: 'fasting'
    })
  };
  handleChangeAfter_eat = (after_eat) => {
    this.setState({
      after_eat: after_eat,
      card: 'after_eat'
    })
  };
  handleChangeAfter_meal = (after_meal) => {
    this.setState({
      after_meal: after_meal,
      card: 'after_meal'
    })
  };
  handleChangeA1c = (a1c) => {
    this.setState({
      a1c: a1c,
      card: 'a1c'
    })
  };
  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  
 
  sliderNode = null;

  render() {
    const { alt } = this.state;
    const formatul = U => U + ' U/L'
    const format_g = g => g + ' g/dL'
    const format_m = mg => mg + ' mg/dL'
    const format_s = seconds => seconds + ' seconds'
    const { ast } = this.state;
    const { alp } = this.state;
    const { albumin } = this.state;
    const { total_protein } = this.state;
    const { bilirubin } = this.state;
    const { ggt } = this.state;
    const { ld } = this.state;
    const { pt } = this.state;
    const { cholesterol } = this.state;
    const { triglycerides } = this.state;
    const { hdl } = this.state;
    const { ldl } = this.state;
    const { hdl_ratio } = this.state;
    const { fasting } = this.state;
    const { after_eat } = this.state;
    const { after_meal } = this.state;
    const { a1c } = this.state;
   
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
            <h3 className="fw-bold">Lab Test</h3>
            <div className="container vitals_detail m-5 p-3">
                <div className="row">
                <h5 className="fw-bold text-success">Liver Function</h5>
                </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  ALT:
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
                       min={7}
                       max={55}
                        className={ 
                          card === 'alt' 
                            ? 'rangeslider_alt' 
                            : 'rangeslider_alt'
                        }
                        value={alt}
                        format={formatul}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeBmi}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                  AST:
                </label>
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
                       min={8}
                       max={48}
                        className={ 
                          card === 'ast' 
                            ? 'rangeslider_ast' 
                            : 'rangeslider_ast'
                        }
                        value={ast}
                        format={formatul}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeAst}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                ALP:
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
                       min={40}
                       max={129}
                        className={ 
                          card === 'alp' 
                            ? 'rangeslider_alp' 
                            : 'rangeslider_alp'
                        }
                        value={alp}
                        format={formatul}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeAlp}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Albumin:
                </label>
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
                        min={3.5}
                        max={5.0}
                        className={ 
                          card === 'albumin' 
                            ? 'rangeslider_albumin' 
                            : 'rangeslider_albumin'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={albumin}
                        format={format_g}
                        step={0.1}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeAlbumin}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Total protein:
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
                        min={6.3}
                        max={7.9}
                        className={ 
                          card === 'total_protein' 
                            ? 'rangeslider_total_protein' 
                            : 'rangeslider_total_protein'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={total_protein}
                        step={0.1}
                        format={format_g}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeTotal_protein}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Bilirubin:
                </label>
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
                        min={0.1}
                        max={0.2}
                        className={ 
                          card === 'bilirubin' 
                            ? 'rangeslider_bilirubin' 
                            : 'rangeslider_bilirubin'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={bilirubin}
                        step={0.1}
                        format={format_m}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeBilirubin}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                GGT:
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
                       min={8}
                       max={61}
                        className={ 
                          card === 'ggt' 
                            ? 'rangeslider_ggt' 
                            : 'rangeslider_ggt'
                        }
                        value={ggt}
                        format={formatul}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeGgt}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                LD:
                </label>
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
                       min={122}
                       max={222}
                        className={ 
                          card === 'ld' 
                            ? 'rangeslider_ld' 
                            : 'rangeslider_ld'
                        }
                        value={ld}
                        format={formatul}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeLd}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                PT:
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
                       min={9.4}
                       max={12.5}
                        className={ 
                          card === 'pt' 
                            ? 'rangeslider_pt' 
                            : 'rangeslider_pt'
                        }
                        value={pt}
                        step={0.1}
                        format={format_s}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangePt}
                        onChangeComplete={this.handleChangeComplete}
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
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Cholesterol:
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
                       min={200}
                       max={240}
                        className={ 
                          card === 'cholesterol' 
                            ? 'rangeslider_cholesterol' 
                            : 'rangeslider_cholesterol'
                        }
                        value={cholesterol}
                        format={format_m}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeCholesterol}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Triglycerides:
                </label>
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
                       min={20}
                       max={5000}
                        className={ 
                          card === 'triglycerides' 
                            ? 'rangeslider_triglycerides' 
                            : 'rangeslider_triglycerides'
                        }
                        value={triglycerides}
                        format={format_m}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeTriglycerides}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
               HDL Cholesterol:
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
                       min={30}
                       max={60}
                        className={ 
                          card === 'hdl' 
                            ? 'rangeslider_hdl' 
                            : 'rangeslider_hdl'
                        }
                        value={hdl}
                        format={format_m}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeHdl}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                LDL Cholesterol:
                </label>
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
                       min={30}
                       max={500}
                        className={ 
                          card === 'ldl' 
                            ? 'rangeslider_ldl' 
                            : 'rangeslider_ldl'
                        }
                        value={ldl}
                        format={format_m}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeLdl}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Cholesterol/HDL ratio:
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
                       min={20}
                       max={80}
                        className={ 
                          card === 'hdl_ratio' 
                            ? 'rangeslider_hdl_ratio' 
                            : 'rangeslider_hdl_ratio'
                        }
                        value={hdl_ratio}
                        step={0.5}
                        format={format_m}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeHdl_ratio}
                        onChangeComplete={this.handleChangeComplete}
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
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                Fasting:
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
                       min={20}
                       max={600}
                        className={ 
                          card === 'fasting' 
                            ? 'rangeslider_fasting' 
                            : 'rangeslider_fasting'
                        }
                        value={fasting}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeFasting}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                After Eating:
                </label>
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
                       min={170}
                       max={300}
                        className={ 
                          card === 'after_eat' 
                            ? 'rangeslider_after_eat' 
                            : 'rangeslider_after_eat'
                        }
                        value={after_eat}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeAfter_eat}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>               
              </div>
              <div className="row ">
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
                After Meal(1-2hrs):
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
                       min={170}
                       max={300}
                        className={ 
                          card === 'after_meal' 
                            ? 'rangeslider_after_meal' 
                            : 'rangeslider_after_meal'
                        }
                        value={after_meal}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeAfter_meal}
                        onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                </p>
                <label className="col-md-2 col-lg-2 col-sm-12 fw-bold">
               A1c:
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
                        min={5.7}
                        max={6.5}
                        className={ 
                          card === 'a1c' 
                            ? 'rangeslider_a1c' 
                            : 'rangeslider_a1c'
                        }
                        style={{ backgroundColor:'blue'}}
                        value={a1c}
                        step={0.1}
                        onChangeStart={this.handleChangeStart}
                        onChange={this.handleChangeA1c}
                        onChangeComplete={this.handleChangeComplete}
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
