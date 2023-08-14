import styled from 'styled-components';

interface BarProps {
  value: number;
  className: string;
}

const Bar = ({ value, className }: BarProps) => {
  return (
    <StyledBar $height={value} className={className}>
      {value}
    </StyledBar>
  );
};

const StyledBar = styled.div<{ $height: number }>`
  height: ${props => props.$height}px;
  min-height: 1.1rem;
  width: 2rem;
  margin: 0 0.2rem;
  padding: 0.25rem;
  font-size: smaller;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 0.6rem 0.6rem 1rem 1rem;
  background: var(--blue-gradient);
  &.green {
    background: var(--green-gradient);
  }
  &.orange {
    background: var(--orange-gradient);
  }
  &.red {
    background: var(--red-gradient);
  }
`;

export default Bar;
