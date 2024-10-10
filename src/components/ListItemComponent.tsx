import { ListItem, Text } from '@chakra-ui/react';
import { Format } from '../types/api';

//TODO: Ignore this fn, will be deleted when we implement localization for translations
const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


export const ListItemComponent = ({ item }: { item: Format }) => {

    return (
        <ListItem
            flex='0 0 45%'
            maxW='50%'
            sx={{
                '::marker': {
                    color: '#b4e2dc',
                }
            }}
        >

            <Text as="span" fontSize="lg" fontWeight="semibold" color="white">
                {capitalizeFirstLetter(item.translated)} - {item.count.toLocaleString()}
            </Text>

        </ListItem>
    );
}