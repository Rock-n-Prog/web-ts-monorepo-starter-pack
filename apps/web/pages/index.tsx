import { Button } from 'web-ui/components/inputs';
import { Header1, Header2, Body1 } from 'web-ui/components/typography';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';
import trpc from "../hooks/trpc";

function Index() {
  const { switchMode } = useThemeContext();
  const { data } = trpc.useQuery(['hello', { text: 'client' }]);

  return (
    <>
      <Header1>TreeView</Header1>
      <Header2>Index</Header2>
      <Body1>We got data: {data?.greeting}</Body1>
      <Button onClick={switchMode}>Switch theme mode!</Button>
    </>
  );
}

export default Index;
