import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useThemeContext } from "../context/themeContext";

export default function Home() {
  const theme = useThemeContext();
  console.log(theme);
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}
