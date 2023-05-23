import { Component } from "react";
import styles from "../styles/TemplateSelectModal.module.css";
import template1 from "../imgs/template1.webp";

class TemplateSelectModal extends Component {
  render() {
    const { currentTemplate, updateCurrentTemplate, isOpen, onClose } = this.props;
    // console.log(currentTemplate);
    if (!isOpen) return null;

    return (
      <div className= {styles.modal}>
        <div className={styles['modal-content']}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h2>Select a Template</h2>
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
              <img src={template1} className= {styles['template-select-img']} alt="Template numbe 1" />
            </div>
            {/* <div className="template-select-item">
              <label htmlFor="template2">Template 2</label>
              <div>
                <input
                  type="radio"
                  id="template2"
                  name="template"
                  value="template2"
                  checked={currentTemplate === "template2"}
                  onChange={(event) => updateCurrentTemplate(event.target.value)}
                />  
                <img src={template2} alt="Template number 2" />              
              </div>
            </div> */}
            {/* <div className="template-select-item">
              <label htmlFor="template3">Template 3</label>
              <div>
                <input
                  type="radio"
                  id="template3"
                  name="template"
                  value="template3"
                  checked={currentTemplate === "template3"}
                  onChange={(event) => updateCurrentTemplate(event.target.value)}
                />
                <img src={template2} alt="Template number 2" />                
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateSelectModal;