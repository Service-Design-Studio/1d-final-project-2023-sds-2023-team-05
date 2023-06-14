"use client"
import React from 'react'
import { Box, Button } from '@chakra-ui/react';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'


function page() {
    return (
        <ChakraProvider theme={theme}>
            <Box>
                <Button colorScheme="blue">Click me</Button>
            </Box>

            <Text>Hello </Text>

            <Card>
                <CardHeader bg="blue.500" color="white">
                    <Heading size='md'>Client Report</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            View a summary of all your clients over the last month.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Overview
                            </Heading>
                            Check out the overview of your clients.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
                        </Box>
                    </Stack>
                </CardBody>
            </Card>

        </ChakraProvider>
    )
}

export default page
