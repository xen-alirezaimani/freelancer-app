import { LoaderIcon } from "react-hot-toast";

export default function Loading({ height = "40", width = "40" }) {
  return (
    <>
      <LoaderIcon height={height} width={width} />
    </>
  );
}
