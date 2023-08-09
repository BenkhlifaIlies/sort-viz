import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import ErrorBoundary from '../errorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

const mainLayout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <ErrorBoundary>
        <Header />
        {children}
        <Footer />
      </ErrorBoundary>
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
