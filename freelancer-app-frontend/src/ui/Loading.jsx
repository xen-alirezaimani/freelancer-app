import { ThreeDots } from "react-loader-spinner";

export default function Loading({ height = "40", width = "40" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="#4a6dff"
      visible={true}
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
    />
  );
}
