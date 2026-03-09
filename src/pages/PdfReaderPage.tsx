import { Link, Navigate, useParams } from "react-router-dom";
import PdfReader from "../components/PdfReader";
import { getResourceBySlug } from "../data/resources";

function PdfReaderPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/resources" replace />;
  }

  const resource = getResourceBySlug(slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <section className="bg-[#ececec] px-2 py-2 sm:px-4 sm:py-4">
      <div className="mx-auto max-w-[1320px] border border-slate-300 bg-[#ececec]">
        <div className="grid grid-cols-1  gap-5 bg-gradient-to-r from-[#346fbc] to-[#74d5d9] px-3 py-4 sm:px-6 sm:py-7 lg:grid-cols-[1.15fr_0.85fr]  lg:items-start lg:gap-4">
          <div className="order-2 lg:order-1">
            <PdfReader
              fileUrl={resource.viewUrl}
              downloadUrl={resource.downloadUrl}
              downloadType={resource.downloadType}
            />
          </div>

          <aside className="pr-0 text-white lg:pr-5 order-1 lg:order-2">
            <h2 className="text-4xl  font-extrabold uppercase">{resource.title}</h2>
            <p className="mt-3 max-w-[56ch] text-sm leading-7 font-semibold text-[#f3fbff] sm:text-lg">
              {resource.description}
            </p>

            <Link
              to="/resources"
              className="mt-5 inline-flex items-stretch overflow-hidden no-underline"
              aria-label="Ver más documentos">
              <span className="inline-flex  items-center justify-center bg-[#2f4f77] px-6 font-medium text-white text-xl">
                Ver más documentos
              </span>
              <span className="inline-flex  items-center justify-center bg-white text-[#2f4f77] p-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7">
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </aside>
        </div>

        <div className="h-12 bg-[#ececec] sm:h-16" />
      </div>
    </section>
  );
}

export default PdfReaderPage;
