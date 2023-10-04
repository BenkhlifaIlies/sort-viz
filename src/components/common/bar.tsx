import styled from 'styled-components';
import { BarElement } from '../../constants/types';

interface BarProps extends BarElement {}

const Bar = ({ ...elem }: BarProps) => {
  return (
    <StyledBar $height={Math.max(elem.value, 0)} className={elem.className}>
      {elem.value}
    </StyledBar>
  );
};

const StyledBar = styled.div<{ $height: number }>`
  height: ${props => props.$height}px;
  min-height: 1.1rem;
  width: 2rem;
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
