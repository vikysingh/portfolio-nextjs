import styled from "styled-components";
import { Tipografia } from "../Libreria";
import PropTypes from "prop-types";
import { FaLinkedin, FaYoutube, FaMedium, FaGithub } from "react-icons/fa";

const { Paragrafo } = Tipografia;

const SinistraWrapper = styled.div`
  & div {
    margin: 30px 0;
  }
`;

const IconContainer = styled.a.attrs((props) => ({
  target: "_blank",
  referrerPolicy: "no-referrer",
  title: props.title || "Link sociale",
  href: props.href || "#",
}))`
  margin: 0 10px;
  font-size: 1.2rem;
`;

/* Componente per la colonna sinistra di contatti pagina */
export const Sinistra = ({ email, tel }) => (
  <SinistraWrapper>
    <div>
      <Paragrafo>Email</Paragrafo>
      <Paragrafo bold>
        <a href={`mailto:${email}`}>{email}</a>
      </Paragrafo>
    </div>

    <div>
      <Paragrafo>Telefono</Paragrafo>
      <Paragrafo bold>{tel}</Paragrafo>
    </div>
  </SinistraWrapper>
);

export const Footer = ({
  linkedinLink,
  youtubeLink,
  mediumLink,
  githubLink,
}) => (
  <span>
    <IconContainer href={linkedinLink}>
      <FaLinkedin />
    </IconContainer>
    <IconContainer href={youtubeLink}>
      <FaYoutube />
    </IconContainer>
    <IconContainer href={mediumLink}>
      <FaMedium />
    </IconContainer>
    <IconContainer href={githubLink}>
      <FaGithub />
    </IconContainer>
  </span>
);

Sinistra.propTypes = {
  email: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

Footer.propTypes = {
  linkedinLink: PropTypes.string.isRequired,
  youtubeLink: PropTypes.string.isRequired,
  mediumLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired
}