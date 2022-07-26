import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Store = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
