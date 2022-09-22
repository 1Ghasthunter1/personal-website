import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeView() {
  return (
    <div className="flex shrink justify-center">
      <div className=" shadow rounded-xl overflow-hidden">
        <Document file="resume.pdf">
          <Page pageNumber={1} width={Math.min(window.innerWidth * 0.85, 768)} />
        </Document>
      </div>
    </div>
  );
}

export default ResumeView;
