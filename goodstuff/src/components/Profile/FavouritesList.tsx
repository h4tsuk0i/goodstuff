import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type FavouritesListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

function FavouritesList<T>({ items, renderItem }: FavouritesListProps<T>) {
  return (
    <Box>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {items.map((item, index) => (
          <ListItem key={index}>{renderItem(item)} </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default FavouritesList;
