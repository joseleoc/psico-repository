import { useEffect, useState } from "react";

type AnnexItem = {
  id: number;
  title: string;
  description: string;
};

const annexItems: AnnexItem[] = [
  {
    id: 1,
    title: "Jornada de integración",
    description: "Actividad grupal con el equipo durante el proceso formativo.",
  },
  {
    id: 2,
    title: "Sesión de trabajo",
    description: "Espacio de socialización de resultados y buenas prácticas.",
  },
  {
    id: 3,
    title: "Taller de competencias",
    description: "Dinámica sobre competencias socioemocionales en contexto laboral.",
  },
  {
    id: 4,
    title: "Cierre de experiencia",
    description: "Registro fotográfico de la presentación de aprendizajes finales.",
  },
  {
    id: 5,
    title: "Trabajo colaborativo",
    description: "Momento de construcción conjunta de propuestas de mejora.",
  },
  {
    id: 6,
    title: "Acompañamiento técnico",
    description: "Espacio de orientación sobre actividades del proyecto.",
  },
];

function AnnexesPage() {
  const [selectedItem, setSelectedItem] = useState<AnnexItem>(annexItems[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (item: AnnexItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (!isDialogOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDialogOpen]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <header className="mb-7 sm:mb-9">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Anexos de la experiencia</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          Evidencia fotográfica sobre las actividades realizadas en el Centro Médico Sigma como
          resultado de la participación de Arianna Flores, estudiante de la carrera de Psicología
          (ULA).
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {annexItems.map((item) => {
          const isSelected = item.id === selectedItem.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => openDialog(item)}
              className={`group overflow-hidden rounded-xl border text-left transition-all ${
                isSelected
                  ? "border-[#2f4f77] ring-2 ring-[#2f4f77]/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              aria-label={`Ver detalle de ${item.title}`}>
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-sm font-semibold text-slate-600">
                Foto {item.id}
              </div>
              <div className="px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm">
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle de ${selectedItem.title}`}
          onClick={closeDialog}
        >
          <article
            className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-6">
              <h2 className="text-base font-semibold text-slate-900 sm:text-lg">{selectedItem.title}</h2>
              <button
                type="button"
                onClick={closeDialog}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:bg-slate-100"
                aria-label="Cerrar detalle"
              >
                ✕
              </button>
            </div>

            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-lg font-semibold text-slate-600 sm:text-2xl">
              Vista detallada - Foto {selectedItem.id}
            </div>

            <div className="px-4 py-4 sm:px-6 sm:py-5">
              <p className="text-sm leading-6 text-slate-600 sm:text-base">{selectedItem.description}</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

export default AnnexesPage;
