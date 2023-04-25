import { Component } from "react";
import styles from "../styles/Footer.module.css"; 
import githubLogo from "../imgs/GitHubMarkSmallLight.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().getFullYear()
    };
  }

  render() {
    return (
      <div className= {styles.footer}>
        <p>Copyright © {this.state.date} Luis Tamarez</p>
        <a href="https://github.com/luizerkp" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub logo" id={styles["github-logo"]} />
        </a>
        <p>All Rights Reserved</p>
      </div>
    );
  }
}

export default Footer;