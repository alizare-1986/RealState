import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    
      <ThreeDots
        height={45}
        color="#304ffe"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
        visible={true}
      />
    
  );
}

export default Loader;
