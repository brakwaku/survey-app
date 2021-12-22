import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          alt="logo"
          src="//cmsasset.ancestrycdn.com/content/experience-fragments/global-xf/header/global-header/master/_jcr_content/root/responsivegrid/header/logo.coreimg.svg/1626203683654/ancestry.svg"
          style={{ marginBottom: 10 }}
          height={100}
        />
        <Circle color="#6ba410" size={200} />
      </div>
    </center>
  );
};

export default Loading;
