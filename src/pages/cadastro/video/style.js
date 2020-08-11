import styled from 'styled-components';
import { InputContainer, CategorySelectInput } from '../categoria/style';

export const InputContainerDeleteVideo = styled(InputContainer)`
  width: 100%;
  padding: 20px 0 14px 0;
  border-bottom: 1px solid;
  margin-left: 0;
  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const VideoDeleteInput = styled(CategorySelectInput)`
  width: 50%;
  margin-bottom: 0;
  margin-right: 2rem;
  @media (max-width: 800px) {
    margin-right: 1rem;
    width: 60%;
  }
`;
