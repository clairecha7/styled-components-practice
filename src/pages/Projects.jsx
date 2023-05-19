import {
  ProjectsContainer,
  Project,
  ProjectTitle,
  ProjectImg,
  ProjectLink,
} from "../styles/Projects.style";
import blog from "../assets/blog.png";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project>
        <ProjectLink
          href="https://my-blog-app-neon.vercel.app/"
          target="_blank"
        >
          <ProjectTitle>text</ProjectTitle>
          <ProjectImg src={blog} />
        </ProjectLink>
      </Project>
      <Project>
        <ProjectLink href="#" target="_blank">
          <ProjectTitle>text</ProjectTitle>
          <ProjectImg />
        </ProjectLink>
      </Project>
      <Project>
        <ProjectLink href="#" target="_blank">
          <ProjectTitle>text</ProjectTitle>
          <ProjectImg />
        </ProjectLink>
      </Project>
      <Project>
        <ProjectLink href="#" target="_blank">
          <ProjectTitle>text</ProjectTitle>
          <ProjectImg />
        </ProjectLink>
      </Project>
      <Project>
        <ProjectLink href="#" target="_blank">
          <ProjectTitle>text</ProjectTitle>
          <ProjectImg />
        </ProjectLink>
      </Project>
      <Project>
        <ProjectLink href="#" target="_blank">
          <ProjectTitle>text</ProjectTitle>
          <ProjectImg />
        </ProjectLink>
      </Project>
    </ProjectsContainer>
  );
};

export default Projects;
