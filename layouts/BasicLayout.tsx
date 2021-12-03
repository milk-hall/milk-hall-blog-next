import "@react95/icons/icons.css";
import { ThemeProvider } from "@react95/core";

const BasicLayout: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default BasicLayout;
