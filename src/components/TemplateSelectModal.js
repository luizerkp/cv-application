import { useEffect } from 'react';
import styles from "../styles/TemplateSelectModal.module.css";
import template1 from "../imgs/template1.webp";
import template2 from "../imgs/template2.webp";
import template3 from "../imgs/template3.webp";

const TemplateSelectModal = (props) => {
  const { currentTemplate, updateCurrentTemplate, isOpen, onClose } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.modal}`)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className= {styles.modal}>
      <div className={styles['modal-content']}>
        <span className={styles.close} onClick={(e) => {
          e.stopPropagation();
          onClose();
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

export default TemplateSelectModal;