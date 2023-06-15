"use client"

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import React, { useEffect, useState } from "react";

async function getTasks() {
    const res = await fetch("https://faqapi-service-mgn7slqt5a-as.a.run.app/faqs", { cache: "no-store" });
    const faqs = await res.json();
    return faqs;
}


function Stupodtable() {

    const [theadData, setTheadData] = useState([]);
    const [tbodyData, setTbodyData] = useState([]);

    useEffect(() => {
        getTasks().then(faqs => {
            const tableHeadings = Object.keys(faqs[0]);
            setTheadData(tableHeadings);
            setTbodyData(faqs);
        });
    }, []);


    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    {theadData.map(heading => {
                        return <th key={heading}>{heading}</th>
                    })}
                </Thead>
                <Tbody>
                    {tbodyData.map((row, index) => {
                        return <tr key={index}>
                            {theadData.map((key, index) => {
                                return <td key={row[key]}>{row[key]}</td>
                            })}
                        </tr>;
                    })}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default Stupodtable