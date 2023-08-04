import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';

interface LayoutProps {
  children: React.ReactNode;
}

const mainLayout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
export default mainLayout;
