import ButtonComponent from "./Button";
import ImageComponent from "./ImageComponent";

const GetStar = () => {
  return (
    <div className="stellar">
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <div className="container">
        <ImageComponent
          src="https://images.unsplash.com/photo-1701378430426-5eebbf4593f9?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Astratto"
          width={100}
        />
        <ButtonComponent textButton="Press me" />
        <ButtonComponent className="animated-button" textButton="Animated" />
      </div>
    </div>
  );
};

export default GetStar;
