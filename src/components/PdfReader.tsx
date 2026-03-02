import { useMemo, useState } from "react";
import DownloadIcon from "../assets/icons/download.svg";
import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";

type PdfReaderProps = {
  fileUrl: string;
};

function PdfReader({ fileUrl }: PdfReaderProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const workerUrl = useMemo(
    () => "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js",
    [],
  );

  return (
    <div className="w-full min-w-0 overflow-hidden bg-white shadow-sm">
      <div className="h-[58vh] min-h-[420px] w-full bg-[#efefef] md:h-[68vh]">
        <Worker workerUrl={workerUrl}>
          <Viewer
            fileUrl={fileUrl}
            defaultScale={SpecialZoomLevel.PageFit}
            onDocumentLoad={(event) => {
              setNumPages(event.doc.numPages);
              setPageNumber(1);
            }}
            onPageChange={(event) => {
              setPageNumber(event.currentPage + 1);
            }}
          />
        </Worker>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#29292f] px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">
            {pageNumber}/{numPages || "--"}
          </span>

          <a
            href={fileUrl}
            download
            className="inline-flex items-center rounded border border-white/40 px-2.5 py-1 text-xs font-medium text-white no-underline transition-colors hover:bg-white/10">
            <img src={DownloadIcon} alt="Descargar PDF" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PdfReader;
