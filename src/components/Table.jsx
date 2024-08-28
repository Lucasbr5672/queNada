import React from "react";
import { TableContainer, Thead} from "../styles/Table";

const Table = () =>{
    return(
        <TableContainer>
            <Thead>
                <Tr>
                    <Th>Titulo</Th>
                    <Th>Autor(a)</Th>
                    <Th>Editora</Th>
                </Tr>
            </Thead>
        </TableContainer>
    )
}