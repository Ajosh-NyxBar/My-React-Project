import Header from "../Components/Header";
import Layout from "../Components/Layout";
import MainContent from "../Components/MainContent";
import { useThemeContext } from "../context/themeContext";

export default function Home() {
  const theme = useThemeContext();
  console.log(theme);
  return (
    <div>
      <Layout>
        <MainContent>
          
        </MainContent>
      </Layout>
    </div>
  );
}