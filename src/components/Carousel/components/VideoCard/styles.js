import styled from 'styled-components';

<<<<<<< HEAD
const VideoCardContainer = styled.a`
=======
const VideoCardContainer = styled.li`
>>>>>>> c34848d86df1e0ac61b2c284f4a679ee62a1aaa0
  display: flex;
  width: var(--videoCard-container-width);
  height: var(--videoCard-container-height);
  padding: 16px;
<<<<<<< HEAD
  position: relative;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 2px solid;
  border-radius: 10px;
  border-color: ${({ categoryColor }) => categoryColor};
  text-decoration: none;
  color: white;
  opacity: 0.6;
  overflow: hidden;
  cursor: pointer;
  transition: width 0.4s, height 0.4s, border-color 0.4s, transform 0.4s;
  &:not(:first-child) {
    margin-left: 20px;
  }
=======
  
  position: relative;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  
  border: 2px solid;
  border-radius: 10px;

  text-decoration: none;
  color: white;

  opacity: .6;
  overflow: hidden;
  cursor: pointer;
  transition: width 0.4s, height 0.4s, border-color 0.4s, transform 0.4s;
  
  &:not(:first-child) {
    margin-left: 20px;
  }

>>>>>>> c34848d86df1e0ac61b2c284f4a679ee62a1aaa0
  @media (max-width: 800px) {
    width: var(--videoCard-container-width-mob);
    height: var(--videoCard-container-height-mob);
  }
<<<<<<< HEAD
=======
  
>>>>>>> c34848d86df1e0ac61b2c284f4a679ee62a1aaa0
`;

export default VideoCardContainer;
