import { withLayout } from "@/layout/Layout";
import { useEffect, useState } from "react";
import { Button, Htag, P, Tag, Rating } from "../components";

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log("counter " + counter);
    return function cleanUp() {
      console.log("unmount");
    };
  });

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        plus me
      </Button>
      <Button appearance="ghost">Button</Button>
      <P size="l">BIG ONE</P>
      <P>MEDIUM TWO</P>
      <P size="s">SMALL THREE</P>
      <Tag size="s">ghost</Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag color="primary">primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
