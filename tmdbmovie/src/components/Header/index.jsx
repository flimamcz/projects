import React from "react";
import Logo from "../../images/logo.svg";
import { Head, Flex, Nav, Container, Btn } from "./style";
const Header = ({ text }) => {
  return (
    <Head>
      <Container>
        <Flex>
          <div>
            <a href="">
              <img src={Logo} alt="logo the movie double black na cor com  degrade verde para azul." />
            </a>
          </div>

          <div>
              <Btn href="">{text}</Btn>
          </div>
        </Flex>
      </Container>

      <Nav>
        <h1>The Movie Double Black</h1>
      </Nav>
    </Head>
  );
};

export default Header;
