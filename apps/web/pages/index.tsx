import { Button } from 'web-ui/components/inputs';
import { Header1, Header2 } from 'web-ui/components/typography';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';

function Index() {
  const { switchMode } = useThemeContext();

  return (
    <>
      <Header1>TreeView</Header1>
      <Header2>Index</Header2>
      <Button onClick={switchMode}>Switch theme mode!</Button>
    </>
  );
}

export default Index;
