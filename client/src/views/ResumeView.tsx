import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Link } from "react-router-dom";
import Button from "../elements/Button";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-col shrink justify-center max-w-3xl">
      <div className="flex justify-between mb-6 ">
        <div>
          <div className="text-2xl font-semibold">Resume</div>
          <div className="text-md">Last updated September 2022.</div>
        </div>
        <div>
          <Link to="/resume.pdf" target="_blank" download>
            <Button iconName="download">Download</Button>
          </Link>
        </div>
      </div>
      <div className="shadow h-full rounded-xl overflow-hidden z-30">
        <Document
          file="resume.pdf"
          onLoadProgress={() => setIsLoading(true)}
          onLoadSuccess={() => setIsLoading(false)}
        >
          <Page
            pageNumber={1}
            width={Math.min(window.innerWidth * 0.85, 768)}
          />
        </Document>
      </div>
    </div>
  );
}

export default ResumeView;
