import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        bio: "",
        avtar: "",
      },
    };
    console.log("second child constructor");
  }
  async componentDidMount() {
    console.log("second child componentdid mount");
    const api = await fetch("https://api.github.com/users/gaurav8158");
    const json = await api.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("second child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("second child componentwillunmount");
  }
  render() {
    console.log("second child render called");
    return (
      <div className="font-serif px-3 rounded-md bg-blue-200  drop-shadow-2xl shadow-2xl shadow-black mb-2 pt-2 text-center">
        <div className="max-w-sm mt-2 w-1/3 m-auto overflow-hidden rounded-lg mb-2">
          <img className="overflow-hidden w-full rounded-full" src={this.state.userInfo.avatar_url} />
        </div>

        <p className="text-xl font-bold text-slate-800">{this.state.userInfo?.name}</p>
        <p className="font-serif text-slate-600 text-sm mb-2">{this.state.userInfo?.bio}</p>
        <div className="flex justify-center mb-2 ">
          <Link to="https://twitter.com/Gauravs14241133"><FaTwitter className="text-blue-600 m-1" /></Link>
          <Link to="https://github.com/gaurav8158"><FaGithub className="m-1" /></Link>
          <Link to="https://www.linkedin.com/in/gauravsonis/"><FaLinkedin className="text-blue-600 m-1" /></Link>
        </div>
      </div>
    );
  }
}
export default Profile;
