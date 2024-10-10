import { List } from "@chakra-ui/react";
import { Format } from "../../../../types/api";
import { ListItemComponent } from "./ListItemComponent";
import { ListLoading } from "./ListLoading";
type Props = {
  format: Format[] | undefined;
}
export const ListFormats = ({ format }: Props) => {
  return (
    <List listStyleType="-" display="flex" flexWrap="wrap" gap="4" flexDirection="row" p={2}>
      {format ? (
        format.map((item) => (
            <ListItemComponent item={item} key={item.translated} />))
          ) : ( 
          <ListLoading />
          )}
    </List>
  )
}
