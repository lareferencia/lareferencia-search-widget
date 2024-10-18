import { List, SimpleGrid } from "@chakra-ui/react";
import { Format } from "../../../../interfaces/api";
import { ListItemComponent } from "./ListItemComponent";
import { ListLoading } from "./ListLoading";

type Props = {
  format: any;
};


export const ListFormats = ({ format }: Props) => {

  const columns = format ? Math.ceil(format.length / 4) : 1; // Calcula las columnas necesarias.

  return (
    <SimpleGrid as='ul'
    columns={columns} spacing={2}
    >
      {format ? (
        format.map((item) => (
          <ListItemComponent item={ item } key={ item.translated } />
        ))
      ) : (
        <ListLoading />
      )}
    </SimpleGrid>
  );
};
