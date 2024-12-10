//import TeaCard from "../../Components/TeaCard/TeaCard.tsx"; <TeaCard></TeaCard>
import {Button, Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';

import "./TeaLoadOut.css"

const TeaLoadOut = () => 
{
    return (
    <div>
        <Button type="button" onPress={() => console.log('Clicked')}>Add A New Tea</Button>
        <Table>
            <TableHeader>
                <Column isRowHeader>
                    Name
                </Column>
                <Column>Date Modified</Column>
                <Column>Edit</Column>
            </TableHeader>
            <TableBody>
            <Row>
                <Cell>
                check
                </Cell>
                <Cell>Games</Cell>
                <Cell>6/7/2020</Cell>
            </Row>
            <Row>
                <Cell>
                check
                </Cell>
                <Cell>Program Files</Cell>
                <Cell>4/7/2021</Cell>
            </Row>
            <Row>
                <Cell>
                check
                </Cell>
                <Cell>bootmgr</Cell>
                <Cell>11/20/2010</Cell>
            </Row>
            <Row>
                <Cell>
                    check
                </Cell>
                <Cell>log.txt</Cell>
                <Cell>1/18/2016</Cell>
            </Row>
            </TableBody>
        </Table>
    </div>);
}

export default TeaLoadOut;