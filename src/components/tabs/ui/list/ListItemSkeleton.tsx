import { ListItem, Skeleton, Text } from '@chakra-ui/react';

export const ListItemSkeleton = () => {

    return (
        <ListItem
          key={2}
          flex='0 0 45%'
          maxW='50%'
          sx={{
            '::marker': {
              color: '#b4e2dc',
            }
          }}
        >
          <Skeleton isLoaded={false}>
            <Text as="span" fontSize="xl" fontWeight="semibold" color="white">
              {"Format"} - {"Loading..."}
            </Text>
          </Skeleton>
        </ListItem>
      );
    }