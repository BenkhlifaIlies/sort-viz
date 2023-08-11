import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import ErrorBoundary from '../components/errorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

const mainLayout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <ErrorBoundary>
        <Header />
        <main>{children}</main>
        <Footer />
      </ErrorBoundary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* justify-content: space-between; */
  > header,
  > footer {
    flex: 0 0 auto;
  }
  > main {
    flex: 1 1 auto;
  }
`;
export default mainLayout;
