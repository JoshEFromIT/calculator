// //import the .css file

// import "./Wrapper.css";

// //declare a constant that receives the child components and
// const Wrapper = ({ children }) => {
//   return <div className="wrapper">{children}</div>;
// };


// export default Wrapper;


import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;