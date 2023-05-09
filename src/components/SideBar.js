import { Component } from "react";
import styles from "../styles/SideBar.module.css";
import Icon from '@mdi/react';
import { mdiAccountDetails,
  mdiCellphone,
  mdiWrench,
  mdiSchool,
  mdiCheckDecagram,
  mdiViewGridPlusOutline,
} from '@mdi/js';

const defaultIconSize =1.5;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className = {styles.sidebar}>
        <div className={styles["sidebar-item"]} datatype='header'>
        <Icon path={mdiAccountDetails} size={defaultIconSize} />
        <p>Header</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='contact'>
        <Icon path={mdiCellphone} size={defaultIconSize} />
          <p>Contact</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='experience'>
          <Icon path={mdiWrench} size={defaultIconSize} />
          <p>Experience</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='education'>
        <Icon path={mdiSchool} size={defaultIconSize} />
          <p>Education</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='skills'>
        <Icon path={mdiViewGridPlusOutline} size={defaultIconSize} />
          Skills
        </div>
        <div className={styles["sidebar-item"]} datatype='skills'>
          <Icon path={mdiCheckDecagram } size={defaultIconSize} />
          <p>Credentials</p>
        </div>
      </nav>
    );
  }
}

export default SideBar;