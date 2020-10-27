import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';
import ConverData from "./ConverData";
const ww = 50;

export default class ExampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataRender: {
                headerFix: [],
                header: [],
                bodyFix: [],
                body: []
            }
        };
        this.headerIsScrolling = false;
        this.rowsIsScrolling = false;
    }
    componentWillReceiveProps(nextProps, prevState){
        if(nextProps && nextProps.dataRender && nextProps.dataRender.DetailData.length > 0 &&  nextProps.dataRender != prevState.dataRender) {
            this.getData(nextProps.dataRender);
        }
    }
    getData(data) {
        const dataConver =  ConverData(data, this.props.tabActive);
        this.convertDataForRender(dataConver);
    }
    convertDataForRender(Data) {
        const dataRender = {
            headerFix: [],
            header: [],
            bodyFix: [],
            body: []
        }
        Data.forEach((e, i) => {
            const bodyFix = [];
            const body = [];
            const headerFix = [];
            const header = [];
            e.forEach((item, index) => {
                if(i < 2) {
                    index < 2&&headerFix.push(item);
                    index > 1&&header.push(item);
                } else {
                    if(index<2) {
                        bodyFix.push(item);
                    } else {
                        body.push(item);
                    }
                }
            });
            i<2&&dataRender.header.push(header);
            i<2&&dataRender.headerFix.push(headerFix);
            i>2&&dataRender.body.push(body);
            i>2&&dataRender.bodyFix.push(bodyFix);
        });
        console.log('du lieu', dataRender)
        // this.setState({
        //     dataRender
        // });
    };
    // headertop
    genHeaderData = () => {
        const tableData = [];
        for (let i = 2; i <= 20; i += 1) {
            tableData.push(i);
        }
        return [tableData];
    }

    // content
    genColData = () => {
        const tableData = [];
        for (let i = 1; i <= 30; i += 1) {
            tableData.push(i);
        }
        return tableData;
    }

    // headerfor freez left
    genRowsData = () => {
        const arr1 = [];
        const arr2 = [];
        for (let i = 2; i <= 20; i += 1) {
            arr1.push(i);
        }
        for (let j = 1; j <= 30; j += 1) {
            arr2.push(arr1);
        }
        return arr2;
    }

    render() {
        const state = this.state;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                            <Rows
                                data={[['(1)', '(2)']]}
                                textStyle={styles.text}
                                style={{ height: 60, backgroundColor: '#537791' }}
                                widthArr={[ww, ww]}
                            />
                        </Table>
                        <ScrollView
                            horizontal
                            ref={(view) => { this.headerScrollView = view; }}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={5}
                            onScroll={(event, x) => {
                                {
                                    console.log('rows水平滚动距离======>', event.nativeEvent);//水平滚动距离
                                    const offsetX = event.nativeEvent.contentOffset.x;
                                    if (!this.headerIsScrolling) {
                                        this.rowsIsScrolling = true;
                                        this.rowsScrollView.scrollTo({ x: offsetX });
                                    }
                                    this.headerIsScrolling = false;
                                }
                            }}
                        >
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                                <Rows
                                    data={this.genHeaderData()}
                                    textStyle={styles.text}
                                    style={{ height: 60, backgroundColor: '#537791' }}
                                    widthArr={[ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww]}
                                />
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                            <Rows
                                data={[['1', '2'], ['1', '2'], ['1', '2'], ['1', '2'], ['1', '2'], ['1', '2'], ['1', '2'], ['1', '2'], ['1', '2']]}
                                textStyle={styles.text}
                                style={{ height: 40 }}
                                widthArr={[ww, ww]}
                            />
                        </Table>
                        <ScrollView
                            horizontal={true}
                            ref={(view) => { this.rowsScrollView = view; }}
                            scrollEventThrottle={5}
                            onScroll={(event) => {
                                {
                                    console.log('rows水平滚动距离======>', event.nativeEvent);
                                    const offsetX = event.nativeEvent.contentOffset.x;
                                    if (!this.rigthIsScrolling) {
                                        this.headerIsScrolling = true;
                                        this.headerScrollView.scrollTo({ x: offsetX });
                                    }
                                    this.rigthIsScrolling = false;
                                }
                            }}
                        >
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                                <Rows
                                    data={this.genRowsData()}
                                    textStyle={styles.text}
                                    style={{ height: 40 }}
                                    widthArr={[ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww, ww]}
                                />
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    text: { margin: 6 },
});