const ColorfulMessage = (props) => {
  // 分割代入のテクニックを使う
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
