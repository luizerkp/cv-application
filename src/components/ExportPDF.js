import React from 'react';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';


class ExportPDF extends Component {
  constructor(props) {
    super(props);
    this.pdfRef = React.createRef();
  }

  handleExportPDF = () => {
    const resumeElement = document.querySelector('[data-resume]');

    if (resumeElement) {
      this.pdfRef.current.updateContainer(resumeElement);
    }
  };

  render() {
    return (
      <div>
        <PDFViewer>
          <Document>
            <Page size="A4" ref={this.pdfRef} />
          </Document>
        </PDFViewer>
        <button onClick={this.handleExportPDF}>Export as PDF</button>
      </div>
    );
  }
}

export default ExportPDF;

