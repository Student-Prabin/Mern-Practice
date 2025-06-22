import { List, ListItem, Card } from "@material-tailwind/react";

export function ListDefault({ sym, name }) {
  return (
    <Card className="w-96">
      <List>
        <ListItem>{`symbol:${sym}  name:${name}`}</ListItem>
      </List>
    </Card>
  );
}