import { extendTheme } from '@chakra-ui/react';


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
    },
});

export default theme;
