import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm Kent Clark Ogawa.</p>

          <h1>
            Building digital experiences
            <br />
            through <span>code and creativity.</span>
          </h1>

          <p className="hero-description">
            I'm a software developer passionate about building web applications,
            exploring new technologies, and turning ideas into functional
            digital experiences.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              Explore My Projects
            </Link>

            <Link href="/contact" className="button button-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
