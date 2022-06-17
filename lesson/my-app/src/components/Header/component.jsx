import Link from '../shared/Link';
import Image from "../shared/Image";

import logo from "../../logo.svg";
import './styles.css';

const Header = () => (
  <header className="App-header">
    <Image
      src={logo}
      alt="logo"
    />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <Link
      href="https://reactjs.org"
      text="Learn React"
    />
  </header>
)

export default Header;
