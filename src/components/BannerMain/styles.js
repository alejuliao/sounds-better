import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 100px;
  }
`;

ContentAreaContainer.Item = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  align-items: center;
  border-radius: 4px;
  display: flex;
  display: inline-block; 
  font-family: Roboto;
  font-style: normal;
  font-size: 60px;
  font-weight: normal;
  line-height: 70px;
  line-height: 1;
  padding: 25px;
  text-align: center;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  color: #fff;
  height: 80vh;
  position: relative;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  background: var(--white);
  border: 1px solid transparent;
  border-color: var(--black);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--black);
  cursor: pointer;
  display: inline-block;
  display: none;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  padding: 16px 24px;
  margin: 0 auto;
  text-decoration: none;
  transition: opacity .3s;
  @media (max-width: 800px) {
    display: block;
  }
`;