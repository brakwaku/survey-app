import styled from "styled-components";
import media from "../../utilities/media";

const SummaryItem = styled.div`
  position: relative;
  padding: 1.5rem;
  border: 1px solid #6ba410;
  ${({ color }) => handleColorType(color)};

  ${media.medium`
    margin-bottom: .6rem;
  `}
`;

export default SummaryItem;

const handleColorType = (color) => {
  switch (color) {
    case "blue":
      return "color: white; background: #005c7d;";
    case "green":
      return "color: white; background: #6ba410;";
    case "footer":
      return "color: black; background: #F0EEE9;";
    default:
      return "color: black; background: #fff;";
  }
};