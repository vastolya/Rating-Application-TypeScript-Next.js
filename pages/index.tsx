import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow='right'>Button</Button>
      <Button appearance="ghost">Button</Button>
      <P size='l'>BIG ONE</P> 
      <P >MEDIUM TWO</P> 
      <Tag size='s'>ghost</Tag>
      <Tag size='m' color='red'>red</Tag>
      <Tag size='s' color='green'>green</Tag>
      <Tag color='primary'>primary</Tag>
    </div>
  );
}
