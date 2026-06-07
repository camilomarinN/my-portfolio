import TechOrbit from "../components/TechOrbits";
import "../styles/hero.css";

const aboutItems = [
  "+2 años de experiencia en desarrollo de software.",
  "Dominio del ecosistema Java (Java SE, Spring, Spring Boot, MyBatis).",
  "Experiencia en bases de datos relacionales (Oracle, MySQL) y no relacionales (MongoDB).",
  "Conocimientos en AWS (S3, RDS, Lambda, SQS, CloudWatch), Docker y Kubernetes.",
  "Experiencia en control de versiones con Git (GitHub / Bitbucket) y metodologías ágiles (SCRUM / Jira).",
  "Enfoque en desarrollo limpio, mantenimiento del código y experiencia de usuario.",
  "Experiencia como líder de equipo de desarrollo, brindando apoyo técnico y revisión de código.",
];

const frontendItems = [
  "React - Vite",
  "Thymeleaf",
  "jQuery",
  "SweetAlert2",
  "Bootstrap / Tailwind CSS",
  "Metronic Template",
];

export default function Hero() {
  return (
    <div className="bg-black px-5 py-10">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 max-w-[1100px] mx-auto mb-16 items-start">
        <div className="introCard p-6 border border-white/8 rounded-xl bg-white/3 text-left transition-colors duration-300 hover:border-white/20">
          <span className="inline-block text-[0.65rem] font-bold tracking-widest text-white/35 border border-white/15 rounded px-2 py-0.5 mb-3">
            ES
          </span>
          <p className="m-0 text-[0.95rem] leading-7 text-white/80">
            ¡Hola! Soy desarrollador con enfoque{" "}
            <strong className="text-white">Backend</strong> pero con capacidad{" "}
            <strong className="text-white">Full Stack</strong>, especializado en
            Java con Spring Boot y MyBatis, integrando bases de datos
            relacionales como Oracle y MySQL, y no relacionales como MongoDB.
            Tengo experiencia desplegando soluciones en{" "}
            <strong className="text-white">AWS</strong>, trabajando con Docker y
            Kubernetes, y desarrollando APIs REST y microservicios en equipos
            ágiles. En frontend manejo React, JavaScript y Tailwind CSS, con
            experiencia integrando CMS y CRM en proyectos internacionales.
          </p>
        </div>
        <div className="introDivider w-px self-stretch mt-6" />
        <div className="introCard p-6 border border-white/8 rounded-xl bg-white/3 text-left transition-colors duration-300 hover:border-white/20">
          <span className="inline-block text-[0.65rem] font-bold tracking-widest text-white/35 border border-white/15 rounded px-2 py-0.5 mb-3">
            EN
          </span>
          <p className="m-0 text-[0.95rem] leading-7 text-white/80">
            Hi! I'm a{" "}
            <strong className="text-white">
              Backend-focused Full Stack Developer
            </strong>
            , specialized in Java with Spring Boot and MyBatis, integrating
            relational databases like Oracle and MySQL, and non-relational ones
            like MongoDB. I have experience deploying solutions on{" "}
            <strong className="text-white">AWS</strong>, working with Docker and
            Kubernetes, and building REST APIs and microservices within agile
            teams. On the frontend I work with React, JavaScript and Tailwind
            CSS, with experience integrating CMS and CRM platforms in
            international projects.
          </p>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center tracking-wide">
          About me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutItems.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-start p-4 rounded-xl border border-white/8 bg-white/3 hover:border-white/20 transition-colors duration-300"
            >
              <span className="mt-1.5 w-1.5 h-1.5 min-w-[6px] rounded-full bg-white/40" />
              <p className="text-white/75 text-sm leading-6 m-0">{item}</p>
            </div>
          ))}

          <div className="flex gap-3 items-start p-4 rounded-xl border border-white/8 bg-white/3 hover:border-white/20 transition-colors duration-300 sm:col-span-2 lg:col-span-3">
            <span className="mt-1.5 w-1.5 h-1.5 min-w-[6px] rounded-full bg-white/40" />
            <div>
              <p className="text-white/75 text-sm leading-6 m-0 mb-3">
                Apoyo en desarrollo frontend con HTML5, CSS, JS y frameworks
                como:
              </p>
              <div className="flex flex-wrap gap-2">
                {frontendItems.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/60 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
                <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/35 italic">
                  ¡y más en camino!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xs tracking-widest text-white/35 uppercase mb-6">
          My Technologies
        </p>
        <TechOrbit />
      </div>
    </div>
  );
}
