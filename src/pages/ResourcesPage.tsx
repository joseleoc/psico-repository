import { pdfResources } from '../data/resources'
import { Link, useSearchParams } from 'react-router-dom'

function ResourcesPage() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('q') ?? '').trim().toLowerCase()

  const filteredResources = query
    ? pdfResources.filter((resource) => {
        const searchableText = `${resource.title} ${resource.description}`.toLowerCase()
        return searchableText.includes(query)
      })
    : pdfResources

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <header className="mb-7 sm:mb-9">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Recursos PDF</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          Consulta todos los documentos disponibles del repositorio. Cada recurso incluye una descripción breve y
          acceso directo al archivo PDF.
        </p>
        {query && (
          <p className="mt-3 text-sm font-medium text-slate-700 sm:text-base">
            Resultados para: <span className="text-[#2f4f77]">"{searchParams.get('q')}"</span>
          </p>
        )}
      </header>

      {filteredResources.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600 sm:p-8">
          No se encontraron recursos que coincidan con tu búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
          {filteredResources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
          >
            <h2 className="text-lg font-semibold leading-6 text-slate-900 sm:text-xl">{resource.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{resource.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Link
                to={`/resources/${resource.slug}`}
                className="inline-flex items-center rounded-lg bg-[#2f4f77] px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-[#264367]"
              >
                Ver PDF
              </Link>
              <a
                href={resource.fileUrl}
                download
                className="inline-flex items-center rounded-lg border border-[#2f4f77] px-4 py-2 text-sm font-medium text-[#2f4f77] no-underline transition-colors hover:bg-slate-50"
              >
                Descargar
              </a>
            </div>
          </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ResourcesPage