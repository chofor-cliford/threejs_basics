import { Html } from "@react-three/drei";

const TextBox = ({ text, position, isShowTxt }) => {
  return isShowTxt ?  (
    <Html>
      <div className="card1">
        <p>{text}</p>
      </div>
    </Html>
  ): null;
};

export default TextBox;
