import { Button } from 'web-ui/components/inputs';
import { Header1, Header2 } from 'web-ui/components/typography';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';
import Link from 'next/link';

function Index() {
  const { switchMode } = useThemeContext();

  return (
    <>
      <Header1>TreeView</Header1>
      <Header2>Index</Header2>
      <Button onClick={switchMode}>Switch theme mode!</Button>
      <Link href="/hello/MyName">
        <Button>Go to hello page!</Button>
      </Link>
      <Link href="/users">
        <Button>Go to users page!</Button>
      </Link>
    </>
  );
}

export default Index;
