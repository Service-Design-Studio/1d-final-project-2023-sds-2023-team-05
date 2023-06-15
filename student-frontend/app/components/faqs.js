"use client"

import React from 'react'
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import theme from '../stylesheet/theme';
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import Link from 'next/link'



function FAQ() {
    return (
        <ChakraProvider theme={theme}>
            <Card>
                <CardHeader bg="blue.500" color="white">
                    <Link href="/">
                        <Button colorScheme="blue">Click me</Button>
                    </Link>
                    <Heading size='md'>Client Report</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Summary
                            </Heading>
                            View a summary of all your clients over the last month.
                            <Box>
                                <Button colorScheme="blue">Click me</Button>
                            </Box>
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
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Analysis
                            </Heading>
                            See a detailed analysis of all your business clients.
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

export default FAQ
