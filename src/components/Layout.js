import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.scss";
import { Helmet } from "react-helmet";
import icon from "../../static/favicon.ico";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { TransitionState } from "gatsby-plugin-transition-link";

const Layout = (props) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <StyledLayout>
      <Helmet>
        <title>PYGO Inc.</title>
        <link rel='icon' href={icon} />
      </Helmet>
      
      <Header />
      <TransitionState>
        {({mount, transitionStatus}) => {
              setInProp(mount);
        }}
      </TransitionState>
      <CSSTransition in={inProp} timeout={500} classNames="pageAnimation">
            <div>
              {props.children}
            <Footer />
            </div>
      </CSSTransition>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  .pageAnimation-enter {
    opacity: 0;
  }
  .pageAnimation-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  .pageAnimation-exit {
    opacity: 1;
  }
  .pageAnimation-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;

export default Layout;
