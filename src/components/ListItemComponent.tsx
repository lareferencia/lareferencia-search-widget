import { ListItem, Text, Skeleton } from '@chakra-ui/react';
import { Format } from '../types/api';

//TODO: Ignore this fn, will be deleted when we implement localization for translations
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


export const ListItemComponent = ({ item, index }: { item: Format, index: number }) => {

    return (
        <ListItem
            key={index}
            flex='0 0 45%'
            maxW='50%'
            sx={{
                '::marker': {
                    color: '#b4e2dc',
                }
            }}
        >

            <Text as="span" fontSize="xl" fontWeight="semibold" color="white">
                {capitalizeFirstLetter(item.translated)} - {item.count.toLocaleString()}
            </Text>

        </ListItem>
    );
}