import "./commonIndex.css";
import Title from "./Title";

const Header = () => {
  return (
    <div className="MainHeaderDiv">
      <Title/>
      <span className="HeaderSubItemsSpan">
      <span className="HeaderSubItems">Home</span>
      <span className="HeaderSubItems">About</span>
      <span className="HeaderSubItems">Contact</span>
      <span className="HeaderSubItems">Cart</span>
      </span>
     
    </div>
  );
};
export default Header;
