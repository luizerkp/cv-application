import styles from "../../styles/SideBar.module.css";
import Icon from '@mdi/react';
import { mdiAccountDetails,
  mdiCellphone,
  mdiWrench,
  mdiSchool,
  mdiCheckDecagram,
  mdiViewGridPlusOutline,
} from '@mdi/js';

const defaultIconSize =1.5;

const SideBar = (props) => {
  const { 
    activeForm, 
    handleFormClick, 
    handleActiveForm,
    isChecked, 
    setIsChecked,
  } = props;

  const handleClick = (formName) => {
      if (activeForm === formName) {
        return;
      }
      handleFormClick(formName);
      handleActiveForm(formName);
  };

  const handleChange = () => {
    setIsChecked(prevState => !prevState);
  };
    
  return (
    <nav className = {styles.sidebar}>
      <div className={styles["sidebar-item"]} datatype='header' data-active
      onClick={() => { handleClick('header') }}>
        <Icon path={mdiAccountDetails} size={defaultIconSize} />
        <p>Header</p>
      </div>
      <div className={styles["sidebar-item"]} datatype='contact' 
      onClick={() => { handleClick('contact') }}>
        <Icon path={mdiCellphone} size={defaultIconSize} />
        <p>Contact</p>
      </div>
      <div className={styles["sidebar-item"]} datatype='experience' 
      onClick={() => { handleClick('experience') }}>
        <Icon path={mdiWrench} size={defaultIconSize} />
        <p>Experience</p>
      </div>
      <div className={styles["sidebar-item"]} datatype='education' 
      onClick={() => { handleClick('education') }}>
        <Icon path={mdiSchool} size={defaultIconSize} />
        <p>Education</p>
      </div>
      <div className={styles["sidebar-item"]} datatype='skills' 
      onClick={() => { handleClick('skills') }}>
        <Icon path={mdiViewGridPlusOutline} size={defaultIconSize} />
        <p>Skills</p>
      </div>
      <div className={styles["sidebar-item"]} datatype='credentials' 
      onClick={() => { handleClick('credentials') }}>
        <Icon path={mdiCheckDecagram } size={defaultIconSize} />
        <p>Credentials</p>
      </div>
      <div className={styles["sidebar-item-toggle"]}>
        <p>Sample Resume?</p>
        <label className={styles['switch']}>
          <input id="sample-resume" type="checkbox" checked={isChecked} 
          onChange={handleChange} />
          <span className={styles['slider']}></span>
        </label>
      </div>
    </nav>
  );
}

export default SideBar;
