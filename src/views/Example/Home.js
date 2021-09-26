import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/poil.PNG";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //     this.props.history.push('/todo')
    // }, 3000)
  }

  //HOC: higher order component
  render() {
    console.log(">>> check props: ", this.props);
    console.log(">>> check props redux ", this.props.dataRedux);
    return (
      <div>
        {/* <img src={logo} /> */}
        <br />
        Hello world from Homepage with Eric & Hoi Dan IT
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

export default connect(mapStateToProps)(Color(Home));
