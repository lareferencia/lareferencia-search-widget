import { SimpleGrid } from "@chakra-ui/react";
import { ListItemComponent } from "./ListItemComponent";
import { ListLoading } from "./ListLoading";

type Props = {
  format: any;
};


export const ListFormats = ({ format }: Props) => {

  
  
  const columns = format ? Math.ceil(format.length / 4) : 1; // Calcula las columnas necesarias.

  return (
    <SimpleGrid as='ul'
    columns={columns} spacing={1}
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
