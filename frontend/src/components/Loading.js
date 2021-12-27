import { Circle } from "better-react-spinkit";
import styled from "styled-components";

const Loading = () => {
  return (
    <MainContainer>
      <div>
        <img
          alt="logo"
          src="//cmsasset.ancestrycdn.com/content/experience-fragments/global-xf/header/global-header/master/_jcr_content/root/responsivegrid/header/logo.coreimg.svg/1626203683654/ancestry.svg"
          style={{ marginBottom: 10 }}
          height={100}
        />
        <Circle color="#6ba410" size={200} />
      </div>
    </MainContainer>
  );
};

export default Loading;

const MainContainer = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* place-items: center; */
    height: 100vh;
    width: 80%;
  }
`;
