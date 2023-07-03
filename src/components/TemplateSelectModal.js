import { Component } from "react";
import styles from "../styles/TemplateSelectModal.module.css";
import template1 from "../imgs/template1.webp";
import template2 from "../imgs/template2.webp";
import template3 from "../imgs/template3.webp";

class TemplateSelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
  }

  componentDidUpdate() {
    // add event listener if modal is open and clickCount is 0 to account for the first click
    if (this.state.clickCount === 0 && this.props.isOpen) {
      document.addEventListener("click", this.handleClickOutside);
    }
  }

  handleClickOutside = (event) => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }),
    () => { 
      // Only close modal if clickCount is greater than 1 and the click is outside the modal
      // This is to account for the first click which opens the modal
      const modal = document.querySelector(`.${styles.modal}`);
      if (this.state.clickCount > 1 && modal && !modal.contains(event.target)) {
        this.handleModalClose();
      }
    });
  };

  handleModalClose = () => {
    const { onClose } = this.props;
    this.setState({ clickCount: 0 });
    document.removeEventListener("click", this.handleClickOutside);
    onClose();
  };

  render() {
    const { currentTemplate, updateCurrentTemplate, isOpen} = this.props;
    if (!isOpen) return null;
    return (
      <div className= {styles.modal}>
        <div className={styles['modal-content']}>
          <span className={styles.close} onClick={(e) => {
            e.stopPropagation();
            this.handleModalClose();
          }}>
            &times;
          </span>
          <h2 className={styles['modal-content-header']}>Select a Template</h2>
          <div className= {styles['template-select']}>
            <div className={styles['template-select-item']}>
              <div className={styles['template-select-input']}>
                <input
                type="checkbox"
                id="template1"
                name="template"
                value="template1"
                checked={currentTemplate === "template1"}
                onChange={(event) => updateCurrentTemplate(event.target.value)}
                />
                <label htmlFor="template1">Template 1</label>
              </div>
              <img src={template1} 
              className= {styles['template-select-img']} 
              alt="Template number 1" 
              data-value="template1"
              onClick={(event) => updateCurrentTemplate(event.target.dataset.value)}/>
            </div>
            <div className={styles['template-select-item']}>
              <div className={styles['template-select-input']}>
                <input
                type="checkbox"
                id="template2"
                name="template"
                value="template2"
                checked={currentTemplate === "template2"}
                onChange={(event) => updateCurrentTemplate(event.target.value)}
                />
                <label htmlFor="template2">Template 2</label>
              </div>
              <img src={template2} 
              className= {styles['template-select-img']} 
              alt="Template number 2" 
              data-value="template2"
              onClick={(event) => updateCurrentTemplate(event.target.dataset.value)}/>
            </div>
            <div className={styles['template-select-item']}>
              <div className={styles['template-select-input']}>
                <input
                type="checkbox"
                id="template3"
                name="template"
                value="template3"
                checked={currentTemplate === "template3"}
                onChange={(event) => updateCurrentTemplate(event.target.value)}
                />
                <label htmlFor="template3">Template 3</label>
              </div>
              <img src={template3} 
              className= {styles['template-select-img']} 
              alt="Template number 3" 
              data-value="template3"
              onClick={(event) => updateCurrentTemplate(event.target.dataset.value)}/>
            </div>                        
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateSelectModal;