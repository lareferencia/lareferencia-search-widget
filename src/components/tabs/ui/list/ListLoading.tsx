import { ListItemSkeleton } from './ListItemSkeleton';


export const ListLoading = () => {
  return (
    //iterate 8 times to simulate a list
    Array.from({ length: 8 }).map((_, index) => <ListItemSkeleton key={index} />)
  );
}