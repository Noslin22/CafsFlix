import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  margin: 10vh 0 2rem 2rem;
  padding-top: .5rem;
  border-top: 1px solid;
  border-image: linear-gradient(to right, rgba(0,0,0,.5), var(--primary) 10%, rgba(0,0,0,0)) 1;
  position: relative;
  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const CategorySelectInput = styled.input`
  width: 50vw;
  min-height: 100%;
  padding: .5rem;
  margin-right: 0;
  margin-bottom: 1rem;
  background-color: #484d51;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 6px;
  /* box-shadow: 0 0 2px 2px rgb(115, 115, 115, 0.7); */
  color: var(--grayLight);
  resize: none;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-bottom-color: var(--primary);
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CategoryTitleEditInput = styled(CategorySelectInput)`
  margin-bottom: 0;
`;

export const ButtonShowCategoryEdit = styled.button`
  display: flex;
  text-decoration: none;
  padding: 1rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  background-color: #281e15;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  align-items: center;
  width: 40%;
  justify-content: center;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  margin-left: 2rem;
  justify-content: space-between;
  width: 50vw;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const ButtonModifyCategoryTitle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24vw;
  padding: 1rem;
  background-color: #281e15;
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 45%;
  }
`;

export const ButtonDeleteCategory = styled(ButtonModifyCategoryTitle)`
  width: 24vw;
  flex-direction: column;
  background-color: #201313;
  border: 1px solid #ff0000;
  font-size: 1rem;
`;

export const EditCategorySection = styled.div`
  opacity: 1;
  display: none;
  flex-direction: column;
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, rgba(0,0,0,.5), var(--primary) 5%, rgba(219, 125, 31,0) 105%) 1;
  margin: 2rem 0;
`;

export const TitleH1 = styled.h1`
  text-shadow: 1px 1px 2px rgb(230, 230, 230, 0.7);
  margin-top: 3rem;
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;
