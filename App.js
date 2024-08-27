
import ReactDOM from "react-dom/client";

//React element
const Heading = () => (
  <h1 id="heading" key="h2">
    heading
  </h1>
);

var a =5; // js code
//React component
const HeaderComponent = function () {
  return( 
      <div>
        {a}  
        {console.log(a)}
        {5+7}
        Functional component
        {Heading()}
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
// root.render(heading);


// const heading2 = ce("h2", {id : "heading2" , key : "h2"}, "heading2")
// const container = createElement("div", {id : "container"}, [heading1,heading2])
