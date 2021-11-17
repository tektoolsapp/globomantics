import logo from "./GloboLogo.png";
import { Link } from "react-router-dom";

// class Header extends Component {
//   render() {
//     return (
//       <header className="row">
//         <div className="col-md-5">
//           <img src={logo} className="logo" alt="logo" />
//         </div>
//         <div className="col-md-7 mt-5 subtitle">{this.props.subtitle}</div>
//       </header>
//     );
//   }
// }

const Header = ({ subtitle, title }) => (
  <header className="row">
    <div className="col-md-5">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>
    <div className="col-md-7 mt-5 subtitle">{title}</div>
  </header>
);

export default Header;
