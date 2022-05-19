import "./index.css";

// we could have a global theme and use for the colors of the components
// same also for the paddings/fonts sizes also preferred to be in rem
const Button = ({ children }) => <div className="button">{children}</div>;
export default Button;
