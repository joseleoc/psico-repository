import PrimaryButton from "../components/PrimaryButton";
import cardIconSelection from "../assets/icons/searchPerson.png";
import cardIconOrganization from "../assets/icons/peopleEng.png";
import cardIconSocio from "../assets/icons/peopleStar.png";
import heroBackground from "../assets/images/homeBackground.png";
import doctorsImage from "../assets/images/doctors.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const featuredCards = [
    {
      icon: cardIconSelection,
      title: "Presentación sobre Reclutamiento y Selección",
      slug: "reclutamiento-y-seleccion-sigma",
    },
    {
      icon: cardIconOrganization,
      title: "Presentación sobre Desarrollo Organizacional",
      slug: "desarrollo-organizacional-centro-medico-sigma",
    },
    {
      icon: cardIconSocio,
      title: "Material sobre Fortalecimiento de Competencias Socioemocionales",
      slug: undefined,
      search: "modelo CEL",
    },
  ];

  const handleNavigateToResources = () => {
    navigate("/resources");
  };

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-cover bg-center px-4 pt-7 pb-[5.8rem] md:min-h-140 md:px-6 md:pt-10 md:pb-30 lg:min-h-155 lg:px-[4.8rem] lg:pt-[3.8rem] lg:pb-[9.2rem]"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}>
        <div className="relative z-3 max-w-full text-white lg:max-w-197.5">
          <h1 className="m-0 text-[1.45rem] leading-[1.08] font-extrabold tracking-[0.02em] uppercase sm:text-[1.75rem] md:text-4xl lg:leading-[1.02]">
            REPOSITORIO DE MATERIAL AUDIOVISUAL
            <span className="mt-1 block text-transparent [-webkit-text-stroke:1.3px_rgba(255,255,255,0.95)] [text-stroke:1.3px_rgba(255,255,255,0.95)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.95)] md:[text-stroke:2px_rgba(255,255,255,0.95)]">
              PARA LA GESTIÓN DEL TALENTO HUMANO
            </span>
          </h1>

          <p className="mt-[0.85rem] mb-[1.2rem] max-w-[68ch] text-base font-normal   lg:mt-4 lg:mb-8 lg:max-w-190">
            Bienvenido/a a este espacio digital, creado como resultado de la pasantía en Psicología
            Organizacional realizada en la empresa. Este repositorio centralizado reúne los recursos
            audiovisuales diseñados específicamente para fortalecer las actividades formativas en
            gestión del talento humano.
          </p>

          <PrimaryButton
            text="Ver más"
            ariaLabel="Ver más contenido"
            onClick={handleNavigateToResources}
          />
        </div>

        <img
          src={doctorsImage}
          alt="Profesionales de la salud"
          className="pointer-events-none absolute hidden lg:block right-0 top-0 w-1/2 h-auto object-contain  mix-blend-multiply"
        />
      </section>

      <section
        className="relative z-[3] mx-auto mt-[-38px] grid w-[calc(100%-1rem)] grid-cols-1 gap-4 bg-white px-[0.85rem] py-[0.95rem] shadow-[0_16px_26px_rgba(24,25,26,0.28)] md:mt-[-58px] md:w-[calc(100%-2rem)] md:px-4 md:py-[1.1rem] lg:mt-[-86px] lg:w-[min(1080px,calc(100%-4rem))] lg:grid-cols-3 lg:gap-[1.3rem] lg:px-8 lg:py-[1.45rem]"
        aria-label="Recursos destacados">
        {featuredCards.map((card) => (
          <article
            className="flex cursor-pointer items-center gap-3 rounded-md transition-colors hover:bg-slate-50 focus-within:bg-slate-50 sm:gap-4"
            key={card.title}>
            <button
              type="button"
              onClick={() => navigate(card.slug ? `/resources/${card.slug}` : `/resources?q=${card.search}`)}
              className="flex cursor-pointer w-full items-center gap-3 bg-transparent p-0 text-left border-none sm:gap-4"
              aria-label={`Abrir ${card.title}`}>
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full md:h-[90px] md:w-[90px]">
                <img
                  src={card.icon}
                  alt=""
                  className="h-[52px] w-[52px] object-contain md:h-[90px] md:w-[90px]"
                />
              </div>

              <h2 className="m-0 text-base font-bold text-[#0f1723] ">{card.title}</h2>
            </button>
          </article>
        ))}
      </section>
    </>
  );
}

export default HomePage;
