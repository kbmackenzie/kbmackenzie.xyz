import { useRef } from 'react';
import { Project } from '@typings/project';
import { projects } from '@store/projects';
import classNames from 'classnames';
import '@pages/home/components/projects.sass';

type ProjectCardProps = {
  info: Project;
  classes?: string[];
}

function ProjectCard({ info, classes }: ProjectCardProps) {
  return (
    <a className={classNames('projects-card', classes)}>
      <img src={info.icon?.src} alt={info.icon?.alt} />
      <div>
        <h2>{info.name}</h2>
        <p>{info.description}</p>
      </div>
    </a>
  );
}

type ArrowsProps = {
  scroll: (amount: number) => void;
};

function Arrows({ scroll }: ArrowsProps) {
  return (
    <nav className="projects-nav">
      <button className="projects-prev" onClick={() => scroll(-100)}></button>
      <button className="projects-next" onClick={() => scroll(100)}></button>
    </nav>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement | null>(null);

  function handleScroll(amount: number): void {
    ref?.current?.scrollBy(amount, 0);
  }

  return (
    <section className="projects" ref={ref}>
      <h1>Projects</h1>
      <ul className="projects-cards">
        {projects.map(project => (
          <li key={project.name}>
            <ProjectCard info={project} />
          </li>
        ))}
      </ul>
      <Arrows scroll={handleScroll} />
    </section>
  );
}
