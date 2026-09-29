'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  HardHat,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
  Play,
  Linkedin
} from 'lucide-react'

const allProjects = [
  { category: 'Supervisión', title: 'Comas: Supervisión permanente de Obra', image: './assets/proyectos/supervision-comas.jpg', description: 'Supervisión Permanente de las etapas Jacarandá, Laureles y Magnolias de un área total de 67,213 m2.' },
  { category: 'Monitoreo', title: 'Tempo - Supervisión Financiera', image: './assets/proyectos/supervision-tempo.jpg', description: 'Monitoreo Técnico Financiero del que será el edificio más alto del país. Proyecto desarrollado en Santa Catalina - La Victoria, por Urbana Perú.' },
  { category: 'Supervisión', title: 'La Libertad - Supervisión Permanente de Obra', image: './assets/proyectos/supervision-chao.jpg', description: 'Supervisión de Obra de un gran proyecto de viviendas denominado MarVerde en la provincia de Chao, compuesto por 15,000 viviendas.' },
  { category: 'Supervisión', title: 'The Corner - Supervisión Permanente', image: './assets/proyectos/supervision-corner.jpg', description: 'Supervisión permanente con una participación en un periodo de 17 meses para esta obra ubicada en la Av. Guardia Civil, San Isidro.' },
  { category: 'Monitoreo', title: 'Nuevo Nogales - Supervisión Financiera', image: './assets/proyectos/supervision-nogales.jpg', description: 'Supervisión Financiera de este mega proyecto de viviendas desarrollado por Besco, ubicado en el distrito de El Agustino.' },
]

const testimonials = [
  { text: \"...la verdad, que es muy fácil trabajar con ellos. Tienen mucha predisposición y disponibilidad para las coordinaciones, tanto en obra como a nivel de gestión.. Sus informes son muy completos y a la vez muy fáciles de leer, lo que permite un mejor seguimiento de la obra. Del tiempo que venimos trabajando y coordinando juntos, el trato y la información recibida es muy profesional.\", author: \"Sandra Ascenzo\", role: \"Gerente de Proyectos Inmobiliarios, C&J Constructores\", img: \"./assets/testimonios/c&j.png\" },
  { text: \"Considero que IMAX es la empresa de supervisión de obras más seria que hay en el país. Hacer el trabajo que ellos realizan es muy complicado, y exigente, pero me han demostrado cada vez que los hemos requerido, la transparencia en sus gestiones al informar cada detalle con veracidad. Sin duda el equipo profesional de IMAX es de muy buena calidad y sus informes nos ayudan mucho en la toma de decisiones que podamos necesitar.\", author: \"Alejandro Manzanares\", role: \"Ditrenzzo\", img: \"./assets/testimonios/ditrenzzo.png\" },
  { text: \"IMAX se constituye en una aliada muy importante para nuestra organización inmobiliaria... Confiamos plenamente en los estudios de factibilidad de negocios para los cuales los contratamos por encargo de los diversos clientes de nuestra organización, de modo tal de obtener conclusiones valederas respecto de esos probables negocios y poder tomar las mejores decisiones... En síntesis, nos sentimos muy bien acompañados con IMAX y esperamos seguir contando con su valioso apoyo para el corto, mediano y largo plazo.\", author: \"Octavio Pedraza\", role: \"Gerente General\", img: \"./assets/testimonios/octavio.png\" },
  { text: \"IMAX no sólo se encarga de supervisar y emitir informes de avance de obra en nuestros diferentes proyectos, sino que van más allá. Nos ayudan a mejorar el día a día en nuestros procesos constructivos, seguridad en la obra, así como a mejorar nuestro control de calidad. Es por este motivo que una empresa como IMAX, no la consideramos una supervisora, sino más bien una socia, que nos ayuda a mejorar en cada proyecto que realizamos.\", author: \"Martín Díaz\", role: \"Director Asociado Real Edificaciones\", img: \"./assets/testimonios/real.png\" }
]

const stats = [
  { value: '+17', label: 'Años brindando soluciones confiables', icon: Lightbulb },
  { value: '+77,000', label: 'Informes de tasaciones realizados', icon: ClipboardCheck },
  { value: '+727', label: 'Proyectos analizados', icon: Building2 },
  { value: '+610', label: 'Proyectos supervisados', icon: HardHat },
]

const clients = ['BBVA', 'BCP', 'SCOTIABANK', 'INTERBANK', 'MIBANCO', 'CREDICORP', 'PICHINCHA']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className=\"min-h-screen bg-white text-[#18324b]\">
      <header className=\"fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d2438]/95 text-white backdrop-blur-md\">
        <div className=\"mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10\">
          <a href=\"#inicio\" className=\"flex items-center gap-3\" aria-label=\"IMAX Ingeniería Máxima, inicio\">
            <span className=\"flex h-10 w-10 items-center justify-center rounded-sm bg-[#009fdf] text-2xl font-black italic\">I</span>
            <span className=\"text-xl font-semibold tracking-[0.3em]\">MAX</span>
            <span className=\"hidden border-l border-white/30 pl-3 text-[9px] uppercase tracking-[0.35em] text-white/70 sm:block\">Ingeniería Máxima</span>
          </a>
          <button className=\"rounded-md p-2 md:hidden\" onClick={() => setMenuOpen((open) => !open)} aria-label=\"Abrir menú\">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={\\ gap-6 text-sm font-medium md:flex md:flex-row md:items-center\}>
            <a href=\"#inicio\" className=\"text-[#4ac5f0]\">Inicio</a>
            <a href=\"nosotros.html\" className=\"hover:text-[#4ac5f0]\">Nosotros</a>
            <a href=\"servicios.html\" className=\"hover:text-[#4ac5f0]\">Servicios</a>
            <a href=\"proyectos.html\" className=\"hover:text-[#4ac5f0]\">Proyectos</a>
            <a href=\"contact.html\" className=\"rounded-sm bg-[#009fdf] px-5 py-2.5 transition-transform hover:scale-105\">Contáctanos</a>
          </nav>
        </div>
      </header>

      <section id=\"inicio\" className=\"relative flex min-h-[680px] items-center overflow-hidden bg-[#0d2438] pt-[76px]\">
        <img src=\"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2qKy9GBJUrhSrsUwObK8NDsgX18E0p.png\" alt=\"Profesional de ingeniería evaluando un proyecto\" className=\"absolute inset-0 h-full w-full object-cover opacity-40\" />
        <div className=\"absolute inset-0 bg-gradient-to-r from-[#071b2d] via-[#0d2438]/80 to-[#009fdf]/20\" />
        <div className=\"relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10\">
          <div className=\"max-w-3xl\">
            <p className=\"mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#4ac5f0]\"><span className=\"h-px w-10 bg-[#e67e22]\" /> Ingeniería que genera valor</p>
            <h1 className=\"text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-7xl\">Excelencia que<br /><span className=\"font-semibold\">construye confianza<span className=\"text-[#e67e22]\">.</span></span></h1>
            <p className=\"mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg\">Más de 17 años liderando el sector de ingeniería, tasaciones y supervisión en el Perú.</p>
            <div className=\"mt-10 flex flex-wrap gap-4\">
              <a href=\"servicios.html\" className=\"inline-flex items-center gap-3 bg-[#009fdf] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105\">Conoce nuestros servicios <ArrowRight size={18} /></a>
              <a href=\"nosotros.html\" className=\"inline-flex items-center border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:border-white\">Conócenos</a>
            </div>
          </div>
        </div>
        <div className=\"absolute bottom-0 right-0 hidden w-1/3 border-l border-t border-white/10 bg-[#009fdf]/10 p-8 backdrop-blur-sm lg:block\">
          <p className=\"text-xs uppercase tracking-[0.25em] text-white/60\">Nuestro compromiso</p>
          <p className=\"mt-3 text-2xl font-light text-white\">Soluciones integrales con rigor técnico e integridad.</p>
        </div>
      </section>

      <section className=\"border-b border-[#98a4ae]/20 bg-[#f7fafc]\" aria-label=\"Cifras destacadas\">
        <div className=\"mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4\">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={value} className=\"group flex gap-4 border-r border-[#98a4ae]/20 px-6 py-8 last:border-0 lg:px-8\">
              <Icon className=\"mt-1 shrink-0 text-[#009fdf] transition-transform group-hover:scale-125\" size={30} strokeWidth={1.5} />
              <div>
                <p className=\"text-3xl font-light text-[#18324b]\">{value}</p>
                <p className=\"mt-1 text-xs leading-5 text-[#98a4ae]\">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id=\"nosotros\" className=\"mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10\">
        <div>
          <p className=\"text-xs font-bold uppercase tracking-[0.3em] text-[#009fdf]\">Quiénes somos</p>
          <h2 className=\"mt-5 text-4xl font-light leading-tight text-[#18324b] sm:text-5xl\">Consultores y socios estratégicos de nuestros clientes<span className=\"text-[#e67e22]\">.</span></h2>
          <p className=\"mt-7 max-w-2xl text-base leading-8 text-[#5b6d7d]\">IMAX, Ingeniería Máxima nace en el año 2009 para cubrir las necesidades de las empresas inmobiliarias y financieras del país. Más que proveedores, somos consultores y socios estratégicos de nuestros clientes, a quienes ofrecemos soluciones dirigidas a mejorar sus resultados de negocio.</p>
          <p className=\"mt-5 max-w-2xl text-base leading-8 text-[#5b6d7d]\">Nuestro profesionalismo y compromiso real con la calidad nos permite estar vinculados, en promedio, a más de 90 proyectos al año, lo que representa alrededor de 10 millones de m² supervisados al año.</p>
          <a href=\"nosotros.html\" className=\"mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#009fdf]\">Ver más <ArrowRight size={17} /></a>
        </div>
        <div className=\"border-l-4 border-[#009fdf] bg-[#f7fafc] p-8\">
          <ShieldCheck className=\"text-[#009fdf]\" size={42} strokeWidth={1.5} />
          <h3 className=\"mt-6 text-2xl font-semibold\">Calidad que respalda cada decisión</h3>
          <p className=\"mt-3 text-sm leading-6 text-[#5b6d7d]\">Hemos logrado la implementación de tres normas ISO que abarcan nuestros servicios.</p>
          <div className=\"mt-8 grid grid-cols-3 gap-3\">
            {['9001','27001','37001'].map((iso) => (
              <div key={iso} className=\"flex aspect-square flex-col items-center justify-center border border-[#009fdf]/30 bg-white text-center transition-transform hover:-translate-y-1\">
                <span className=\"text-[10px] font-bold uppercase text-[#009fdf]\">ISO</span>
                <span className=\"mt-1 text-lg font-bold text-[#18324b]\">{iso}</span>
                <span className=\"mt-1 text-[8px] uppercase tracking-wider text-[#98a4ae]\">Certificado</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id=\"servicios\" className=\"bg-[#f7fafc] px-6 py-24 lg:px-10\">
        <div className=\"mx-auto max-w-7xl\">
          <div className=\"flex flex-col justify-between gap-5 sm:flex-row sm:items-end\">
            <div>
              <p className=\"text-xs font-bold uppercase tracking-[0.3em] text-[#009fdf]\">Lo que hacemos</p>
              <h2 className=\"mt-4 text-4xl font-light text-[#18324b]\">Servicios especializados<span className=\"text-[#e67e22]\">.</span></h2>
            </div>
            <p className=\"max-w-sm text-sm leading-6 text-[#98a4ae]\">Dos unidades de negocio para acompañar tus decisiones con información confiable.</p>
          </div>
          <div className=\"mt-12 grid gap-6 md:grid-cols-2\">
            <article className=\"group relative min-h-[350px] overflow-hidden bg-[#0d2438] p-8 text-white flex flex-col\">
              <img src=\"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Dv3PZI4siDb5vJNqIz9e8H1WMswsi2.png\" alt=\"Tasaciones\" className=\"absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105\" />
              <div className=\"relative flex h-full flex-col justify-between\">
                <div>
                  <p className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#4ac5f0]\">Unidad TAS</p>
                  <h3 className=\"mt-3 text-3xl font-semibold\">Tasaciones</h3>
                </div>
                <div>
                  <p className=\"mt-4 max-w-md text-sm leading-6 text-white/80\">Realizamos tasaciones especializadas de todo tipo de bienes para ayudarlo a tomar decisiones informadas. Asimismo, contamos con la experiencia deseada para brindarles soluciones puntuales a través de Consultorías en el sector inmobiliario, industrial y de la construcción.</p>
                  <a href=\"servicios.html\" className=\"mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white\">Ver más <ArrowRight size={17} /></a>
                </div>
              </div>
            </article>
            <article className=\"group relative min-h-[350px] overflow-hidden bg-[#009fdf] p-8 text-white flex flex-col\">
              <img src=\"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2qKy9GBJUrhSrsUwObK8NDsgX18E0p.png\" alt=\"Evaluación y Monitoreo de Proyectos\" className=\"absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-multiply transition-transform duration-500 group-hover:scale-105\" />
              <div className=\"relative flex h-full flex-col justify-between\">
                <div>
                  <p className=\"text-xs font-bold uppercase tracking-[0.25em] text-white/70\">Unidad EMP</p>
                  <h3 className=\"mt-3 text-3xl font-semibold leading-tight\">Evaluación y Monitoreo de Proyectos</h3>
                </div>
                <div>
                  <p className=\"mt-4 max-w-md text-sm leading-6 text-white/90\">Evaluamos y Monitoreamos proyectos para asesorar a promotores inmobiliarios, inversionistas, empresas e instituciones financieras, brindando herramientas de análisis y seguimiento que permiten invertir o financiar de forma segura.</p>
                  <a href=\"servicios.html\" className=\"mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white\">Ver más <ArrowRight size={17} /></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id=\"proyectos\" className=\"mx-auto max-w-full px-0 py-24 bg-white overflow-hidden\">
        <div className=\"mx-auto max-w-7xl px-6 lg:px-10 mb-12\">
          <div className=\"flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6\">
            <div>
              <p className=\"text-xs font-bold uppercase tracking-[0.3em] text-[#009fdf]\">Experiencia comprobada</p>
              <h2 className=\"mt-4 text-4xl font-light text-[#18324b]\">Nuestros proyectos<span className=\"text-[#e67e22]\">.</span></h2>
            </div>
            <a href=\"proyectos.html\" className=\"inline-flex items-center gap-2 bg-[#009fdf] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105\">
              Ver todos los proyectos <ArrowRight size={17} />
            </a>
          </div>
        </div>
        
        <div className=\"relative flex overflow-x-hidden group\">
          <div className=\"animate-[marquee_30s_linear_infinite] flex whitespace-nowrap min-w-full hover:[animation-play-state:paused]\">
            {[...allProjects, ...allProjects].map((project, index) => (
              <div key={\\-\\} className=\"relative w-[350px] sm:w-[450px] h-[300px] shrink-0 mx-2 overflow-hidden group/card bg-[#0d2438]\">
                <img src={project.image} alt={project.title} className=\"absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover/card:scale-110 group-hover/card:opacity-30\" />
                <div className=\"absolute inset-0 bg-gradient-to-t from-[#0d2438] via-[#0d2438]/60 to-transparent\" />
                <div className=\"absolute bottom-6 left-6 right-6 text-white whitespace-normal\">
                  <p className=\"text-[10px] font-bold uppercase tracking-[0.25em] text-[#4ac5f0]\">{project.category}</p>
                  <h3 className=\"mt-2 text-xl font-semibold leading-tight\">{project.title}</h3>
                  <p className=\"mt-2 text-sm text-white/80 line-clamp-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-y-0\">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id=\"testimonios\" className=\"bg-[#f7fafc] py-24\">
        <div className=\"mx-auto max-w-7xl px-6 lg:px-10\">
          <div className=\"text-center max-w-2xl mx-auto mb-16\">
            <p className=\"text-xs font-bold uppercase tracking-[0.3em] text-[#009fdf]\">Testimonios</p>
            <h2 className=\"mt-4 text-4xl font-light text-[#18324b]\">Lo que dicen nuestros clientes<span className=\"text-[#e67e22]\">.</span></h2>
          </div>
          <div className=\"grid md:grid-cols-2 gap-8\">
            {testimonials.map((testimonio, idx) => (
              <div key={idx} className=\"bg-white p-8 border border-[#98a4ae]/20 shadow-sm flex flex-col justify-between\">
                <p className=\"text-[#5b6d7d] text-sm leading-relaxed italic mb-8\">\"{testimonio.text}\"</p>
                <div className=\"flex items-center gap-4\">
                  <img src={testimonio.img} alt={testimonio.author} className=\"w-12 h-12 rounded-full object-contain bg-gray-50 border border-gray-100\" />
                  <div>
                    <p className=\"font-semibold text-[#18324b] text-sm\">{testimonio.author}</p>
                    <p className=\"text-xs text-[#98a4ae] mt-1\">{testimonio.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id=\"video\" className=\"relative flex items-center justify-center min-h-[400px] bg-[#0d2438] overflow-hidden\">
        <img src=\"./assets/sliders/fondo_carrusel_via.jpg\" alt=\"Video cover\" className=\"absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay\" />
        <div className=\"absolute inset-0 bg-[#0d2438]/70\" />
        <div className=\"relative z-10 text-center flex flex-col items-center\">
          <button className=\"group flex flex-col items-center gap-6\" aria-label=\"Reproducir Video IMAX\">
            <div className=\"flex items-center justify-center w-20 h-20 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#009fdf] group-hover:border-[#009fdf] group-hover:scale-110\">
              <Play className=\"ml-1 w-8 h-8 text-white\" fill=\"currentColor\" />
            </div>
            <span className=\"text-white text-lg font-light tracking-[0.2em] uppercase transition-colors group-hover:text-[#4ac5f0]\">Video IMAX</span>
          </button>
        </div>
      </section>

      <section className=\"overflow-hidden border-y border-[#98a4ae]/20 bg-white py-10\">
        <div className=\"mx-auto max-w-7xl px-6\">
          <p className=\"text-center text-[10px] font-bold uppercase tracking-[0.35em] text-[#98a4ae]\">Empresas que confían en nosotros</p>
          <div className=\"mt-8 flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-16 text-xl font-bold tracking-widest text-[#98a4ae]/70\">
            {[...clients, ...clients].map((client, index) => (
              <span key={\\-\\} className=\"transition-colors hover:text-[#009fdf]\">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className=\"bg-[#071b2d] text-white\">
        <div className=\"mx-auto max-w-7xl px-6 py-16 lg:px-10 grid gap-12 md:grid-cols-3\">
          <div className=\"flex flex-col items-start\">
            <div className=\"flex items-center gap-3 mb-6\">
              <span className=\"flex h-10 w-10 items-center justify-center rounded-sm bg-[#009fdf] text-2xl font-black italic\">I</span>
              <span className=\"text-xl font-semibold tracking-[0.3em]\">MAX</span>
            </div>
            <p className=\"text-sm text-white/60\">Excelencia que construye confianza.</p>
          </div>
          
          <div>
            <h4 className=\"text-sm font-bold uppercase tracking-wider text-[#4ac5f0] mb-6\">Contáctanos</h4>
            <div className=\"space-y-4 text-sm text-white/70\">
              <p className=\"flex items-center gap-3\"><Phone size={16} className=\"text-[#009fdf] shrink-0\" /> +51(1) - 7131326</p>
              <a href=\"https://maps.app.goo.gl/YLGoh6Ry8AuHQh2NA\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"flex items-start gap-3 hover:text-white transition-colors\">
                <MapPin size={16} className=\"text-[#009fdf] shrink-0 mt-0.5\" /> Ca. Aldabas 559, Oficina 802, Surco, Lima, Perú
              </a>
              <a href=\"mailto:contacto@imax.com.pe\" className=\"flex items-center gap-3 hover:text-white transition-colors\">
                <Mail size={16} className=\"text-[#009fdf] shrink-0\" /> contacto@imax.com.pe
              </a>
              <a href=\"https://pe.linkedin.com/company/imaxingenieriamaxima\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"flex items-center gap-3 hover:text-white transition-colors\">
                <Linkedin size={16} className=\"text-[#009fdf] shrink-0\" /> LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h4 className=\"text-sm font-bold uppercase tracking-wider text-[#4ac5f0] mb-6\">Canales</h4>
            <div className=\"space-y-6\">
              <a href=\"linea-etica.html\" className=\"flex items-start gap-3 group\">
                <div className=\"p-2 bg-white/5 rounded-md group-hover:bg-[#009fdf]/20 transition-colors\">
                  <ShieldCheck size={18} className=\"text-[#009fdf]\" />
                </div>
                <div>
                  <p className=\"text-sm font-medium text-white group-hover:text-[#4ac5f0] transition-colors\">Línea Ética</p>
                </div>
              </a>
              <a href=\"trabaja-con-nosotros.html\" className=\"flex items-start gap-3 group\">
                <div className=\"p-2 bg-white/5 rounded-md group-hover:bg-[#009fdf]/20 transition-colors\">
                  <HardHat size={18} className=\"text-[#009fdf]\" />
                </div>
                <div>
                  <p className=\"text-sm font-medium text-white group-hover:text-[#4ac5f0] transition-colors\">Trabaja con Nosotros</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className=\"border-t border-white/10 px-6 py-6 text-center text-xs text-white/40 flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl lg:px-10\">
          <p>IMAX Ingeniería Máxima ® - REPEV N° J000062</p>
          <p className=\"mt-2 md:mt-0\">Todos los derechos reservados © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  )
}
