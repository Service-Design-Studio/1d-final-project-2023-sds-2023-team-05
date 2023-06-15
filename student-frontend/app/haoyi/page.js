"use client"

import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from '../stylesheet/theme';
import FAQ from '../components/faqs'
import Stupodtable from '../components/table'

function page() {

    return (
        <ChakraProvider theme={theme}>
            <Tabs isFitted>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                        <FAQ></FAQ>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                        <Stupodtable></Stupodtable>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
    )
}

export default page