import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(78, 72, 72, 0.9),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://assets.thehansindia.com/h-upload/2019/11/24/1600x960_238826-beautiful-scene.jpg");
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 0 2rem;
`;

export const ProjectTitle = styled.h1`
  letter-spacing: 0.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  @media (max-width: 1500px) {
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }
`;

export const Project = styled.div`
  border: 3px solid black;
  background-color: grey;
  width: 25%;
  height: 30%;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }

  &:hover ${ProjectTitle} {
    color: wheat;
  }

  @media (max-width: 1500px) {
    width: 30%;
    height: 25%;
  }
`;

export const ProjectImg = styled.img`
  width: 70%;
  height: 70%;
  margin-top: 1rem;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: white;
`;
