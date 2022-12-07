import "./App.css";
import React from "react";

//Convential props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}
function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

//defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

//Functional props

function TextWithNumber({
  header,
  children,
}: {
  header: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, stateSet] = React.useState<number>(1);

  return (
    <div>
      {header && <h3>{header?.(state)}</h3>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => stateSet(state + 1)}>Add</button>
      </div>
    </div>
  );
}

//list-(generic functions)
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Heading title="Hello world"></Heading>
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber>
        {(num: number) => <div>todays number is num {num}</div>}
      </TextWithNumber>
      <List
        items={["Jack", "sadie", "oso"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
    </div>
  );
}

export default App;
