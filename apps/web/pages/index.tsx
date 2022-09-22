import { Button } from "web-ui/components/inputs";
import { Header1, Header2 } from "web-ui/components/typography";
import { useThemeContext } from "web-ui/contexts/ThemeProvider";

function Index() {
  const {switchMode} = useThemeContext();

  return (
    <div>
      <Header1>TreeView</Header1>
      <Header2>Index</Header2>
      <Button onClick={switchMode}>Press me!</Button>
    </div>
  );
}

export default Index;
