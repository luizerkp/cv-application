import React from 'react';
import { Page, View, Document, Image} from '@react-pdf/renderer';
import html2canvas from 'html2canvas';


const generateHTMLCanvas = async (element) => {
  // console.log(element);
  const canvas = await html2canvas(element, {
    useCORS: true,
    scale: 1
  });
  return canvas.toDataURL('image/png');
};

const generatePDFDocument = async ({ element }) => {
  const imageData = await generateHTMLCanvas(element);
  // console.log(imageData);

  const MyDocument = (
    <Document>
      <Page size="A4">
        <View >
          <Image src={imageData} style={{ width: '100%', height: '100%' }}/>
        </View>
      </Page>
    </Document>
  );

  return MyDocument;
};

export default generatePDFDocument;
