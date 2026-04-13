import { SimpleGrid } from "@chakra-ui/react";
import { ListItemComponent } from "./ListItemComponent";
import { ListLoading } from "./ListLoading";
import { FacetItem } from "../../../../interfaces/api-response";

type Props = {
  format?: FacetItem[];
  columnsBase?: number;
};

export const ListFormats = ({ format, columnsBase = 1 }: Props) => {
  const maxCount = format ? Math.max(...format.map((i) => i.count)) : 1;
  const columns = format ? Math.min(Math.ceil(format.length / 4), 3) : 1;

  return (
    <SimpleGrid
      as="ul"
      columns={{ base: columnsBase, md: 2, lg: columns }}
      spacingX={6}
      spacingY={0}
      p={0}
      m={0}
    >
      {format ? (
        format.map((item) => (
          <ListItemComponent item={item} maxCount={maxCount} key={item.value} />
        ))
      ) : (
        <ListLoading />
      )}
    </SimpleGrid>
  );
};
