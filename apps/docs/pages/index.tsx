import { Button } from 'web-ui/components/inputs';
import { Header1, Header2 } from 'web-ui/components/typography';
import { useThemeContext } from 'web-ui/contexts/ThemeProvider';

export default function Docs() {
  const { switchMode } = useThemeContext();

  return (
    <>
      <Header1>TreeView Docs</Header1>
      <Header2>Index</Header2>
      <Button onClick={switchMode}>Press me!</Button>
    </>
  );
}
