import { SimpleGrid } from "@chakra-ui/react";
import { ListItemComponent } from "./ListItemComponent";
import { ListLoading } from "./ListLoading";

type Props = {
  format: any;
  columnsBase?: number;
};


export const ListFormats = ({ format, columnsBase = 1 }: Props) => {

  const columns = format ? Math.ceil(format.length / 4) : 1; // Calcula las columnas necesarias.

  return (
    //No quiero que sea grid en pantallas pequeñas
    //Quiero que sea una lista

    <SimpleGrid
      as='ul'
      columns={{ base: columnsBase, md: 2, lg: columns }}
      spacing={1}
    >
      {format ? (
        format.map((item) => (
          <ListItemComponent item={item} key={item.value} />
        ))
      ) : (
        <ListLoading />
      )}
    </SimpleGrid>
  );
};
