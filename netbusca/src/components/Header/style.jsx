import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Container = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.07rem;
  background: #f9aa33;
  border: none;
  padding: 12px 20px;
  border-radius: 0.25rem;
  cursor: pointer;

  :hover {
    transition: 0.3s;
    transform: scale(1.05);
  }
`;
