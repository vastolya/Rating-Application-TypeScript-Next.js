import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className="asdasd">Button</Button>
      <Button appearance="ghost">Button</Button>
    </div>
  );
}
