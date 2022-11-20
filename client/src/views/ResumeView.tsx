import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { Link } from "react-router-dom";
import Button from "../elements/Button";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResumeView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="flex flex-col shrink justify-center max-w-3xl">
      <div className="flex justify-between mb-6 ">
        <div>
          <div className="text-2xl font-semibold">Resume</div>
          <div className="text-md">Last updated October 2022.</div>
        </div>
        <div>
          <Link to="/Hunter Pruett Resume.pdf" target="_blank" download>
            <Button iconName="download">Download</Button>
          </Link>
        </div>
      </div>
      <div className="relative h-full rounded-xl overflow-hidden z-30  shadow-2xl">
        <div className="h-6 w-full bg-gray-300 flex pt-[6px] pl-2.5 space-x-1.5">
          <div className="h-3 w-3 bg-red-500 rounded-full" />
          <div className="h-3 w-3 bg-yellow-500 rounded-full" />
          <div className="h-3 w-3 bg-green-500 rounded-full" />
        </div>

        <Document
          file="Hunter Pruett Resume.pdf"
          onLoadProgress={() => setIsLoading(true)}
          onLoadSuccess={() => setIsLoading(false)}
          loading={
            <div className="max-w-[768px] w-screen h-[1024px] text-gray-600 flex justify-center text-xl mt-12">
              <div className="ml-2 absolute animate-spin">
                <FontAwesomeIcon icon="circle-notch" />
              </div>
            </div>
          }
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
