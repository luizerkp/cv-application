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
  handleClick = (formName) => {
      const {activeForm, handleFormClick} = this.props;
      if (activeForm === formName) {
        return;
      }

      handleFormClick(formName);
      
      const activeElement = document.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.removeAttribute('data-active');
      }
      const selectedElement = document.querySelector(`[datatype="${formName}"]`);
      if (selectedElement) {
        selectedElement.setAttribute('data-active', true);
      }
    };
  render() {
    return (
      <nav className = {styles.sidebar}>
        <div className={styles["sidebar-item"]} datatype='header'
          onClick={() => {
            this.handleClick('header')
          }
        }>
        <Icon path={mdiAccountDetails} size={defaultIconSize} />
        <p>Header</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='contact 'data-active onClick={
          () => {
            this.handleClick('contact')
          }
        }>
        <Icon path={mdiCellphone} size={defaultIconSize} />
          <p>Contact</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='experience' onClick={
          () => {
            this.handleClick('experience')
          }
        }>
          <Icon path={mdiWrench} size={defaultIconSize} />
          <p>Experience</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='education' onClick={
          () => {
            this.handleClick('education')
          }
        }>
        <Icon path={mdiSchool} size={defaultIconSize} />
          <p>Education</p>
        </div>
        <div className={styles["sidebar-item"]} datatype='skills' onClick={
          () => {
            this.handleClick('skills')
          }
        }>
        <Icon path={mdiViewGridPlusOutline} size={defaultIconSize} />
          Skills
        </div>
        <div className={styles["sidebar-item"]} datatype='credentials' onClick={
          () => {
            this.handleClick('credentials')
          }
        }>
          <Icon path={mdiCheckDecagram } size={defaultIconSize} />
          <p>Credentials</p>
        </div>
      </nav>
    );
  }
}

export default SideBar;