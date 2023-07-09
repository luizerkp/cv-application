import { useEffect, useState } from 'react';
import styles from '../styles/MainContainer.module.css';
import FormContainer from './mainComponents/FormContainer';
import ResumeContainer from './mainComponents/ResumeContainer';
import SideBar from './mainComponents/SideBar';
import sampleResume from '../utils/sampleResume';
import emptyResumeOject from '../utils/resumeObject';

const MainContainer = (props) => {
  const { currentTemplate, getResumeObject } = props;
  const [activeForm, setActiveForm] = useState('header');
  const [resumeObject, setResumeObject] = useState(emptyResumeOject);
  const [optionalComponents, setOptionalComponents] = useState({
    showSkills: true,
    showCredentials: true,
  });
  
  const handleFormClick = (formName) => {
    setActiveForm(formName);
  };

  const handleActiveForm = (formName) => {
    const activeElement = document.querySelector('[data-active="true"]');
    if (activeElement) {
      activeElement.removeAttribute('data-active');
    }

    const selectedElement = document.querySelector(`[datatype="${formName}"]`);
    if (selectedElement) {
      selectedElement.setAttribute('data-active', true);
    }
  }
  
  const handleNextFormClick = (formName) => {
    const formOrder = ['header', 'contact', 'experience', 'education', 'skills', 'credentials'];
    const formLength = formOrder.length;
    const currentIndex = formOrder.indexOf(formName);
    const nextForm = (currentIndex + 1) < formLength ? formOrder[currentIndex + 1] : formOrder[0];
    nextForm && setActiveForm(nextForm)
    nextForm && handleActiveForm(nextForm);
  };

  const checkEmptyForm = (formData) => {
    if (!formData) return true;

    const emptyForm = Array.isArray(formData) ? 
    formData.every((value) => value === '') : 
    Object.values(formData).every((value) => value === '');

    return emptyForm;
  };
  
  const checkNewData= (formData, formName) => {
    return JSON.stringify(formData) !== JSON.stringify(resumeObject[formName]);
  };

  const checkData = (formData, formName) => {
    return checkEmptyForm(formData) ? false : checkNewData(formData, formName);
  };
  
  const handleFormSubmit = (formData, formName) => {
    checkData(formData, formName) && setResumeObject((prevResumeObject) => ({
      ...prevResumeObject,
      [formName]: formData,
    }));

    handleNextFormClick(formName);
  };

  const loadSampleResume = () => {
    setResumeObject(sampleResume);
  };

  const unloadSampleResume = () => {
    setResumeObject(emptyResumeOject);
  };

  const updateOptionalComponents = (optionalName) => {
    setOptionalComponents((prevOptionalComponents) => ({
        ...prevOptionalComponents,
        [optionalName]: !prevOptionalComponents[optionalName],
    }));
  };

  useEffect(() => {
    getResumeObject(resumeObject);
  }, [resumeObject, getResumeObject]); 


  return (
    <div className={styles['main-container']}>
      <SideBar 
        activeForm = {activeForm} 
        handleFormClick = {handleFormClick}
        handleActiveForm = {handleActiveForm}          
        loadSampleResume={loadSampleResume}
        unloadSampleResume={unloadSampleResume}
      />
      <FormContainer 
        handleFormSubmit={handleFormSubmit}
        updateOptionalComponents={updateOptionalComponents}
        activeForm={activeForm}
        resumeObject={resumeObject}
        optionalComponents={optionalComponents}
      />
      <ResumeContainer
        resumeObject={resumeObject}
        optionalComponents={optionalComponents}
        currentTemplate={currentTemplate}
      /> 
    </div>
  );
}

export default MainContainer;