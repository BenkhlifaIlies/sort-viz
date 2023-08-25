import styled from 'styled-components';
import MainLayout from '../layout/mainLayout';

const About = () => {
  return (
    <MainLayout>
      <Wrapper>
        <h1>About SortViz App</h1>
        <p>
          SortViz is a powerful tool that helps you visualize how different
          sorting algorithms work. With this app, you can see how algorithms
          like
          <b> Bubble Sort, Selection Sort, Insertion Sort, Merge Sort</b> and
          <b> Quick Sort </b>work in real-time.
        </p>
        <p>
          This app is designed to be easy to use and understand. it
          automatically adapts to ur screen size and generates an array
          accordingly, You can adjust the speed of the visualization to see how
          the algorithms perform.
        </p>
        <p>
          Whether you're a student learning about sorting algorithms for the
          first time or an experienced developer looking to optimize your code,
          Sort-Viz can help you gain a deeper understanding of how these
          algorithms work.
        </p>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  padding-inline: 1rem;
  & h1 {
    padding: 1rem;
    width: fit-content;
    @media (min-width: 767px) {
      max-width: 80%;
    }
  }
  & p {
    padding-inline: 1rem;
    line-height: 1.5rem;
    text-align: justify;
    @media (min-width: 767px) {
      max-width: 80%;
    }
  }
`;

export default About;
