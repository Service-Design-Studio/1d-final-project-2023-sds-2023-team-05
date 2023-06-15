import { extendTheme } from '@chakra-ui/react';
import { cardTheme } from './card'
import { tabsTheme } from './tabs'


const theme = extendTheme({
    components: {
        Button: {
            // Customize the styles for the Button component
            baseStyle: {
                fontWeight: 'bold',
                borderRadius: 'md',
            },
            // Customize the default variant for the Button component
            defaultProps: {
                colorScheme: 'blue',
            },
        },
        Card: cardTheme,
        Tabs: tabsTheme
    },
});

export default theme;
