import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';
import ConverData from "./ConverData";
const ww = 50;
const hightColumn = 30;
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
    // componentWillReceiveProps(nextProps, prevState){
    //     if(nextProps && nextProps.dataRender && nextProps.dataRender.DetailData.length > 0 &&  nextProps.dataRender != prevState.dataRender) {
    //         this.getData(nextProps.dataRender);
    //     }
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.dataRender && this.props.dataRender.DetailData.length > 0 && this.props.dataRender != prevProps.dataRender) {
            this.getData(this.props.dataRender);
        }
    }
    getData(data) {
        const dataConver = ConverData(data, this.props.tabActive);
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
                if (i < 2) {
                    index < 2 && headerFix.push(item);
                    index > 1 && header.push(item);
                } else {
                    if (index < 2) {
                        bodyFix.push(item);
                    } else {
                        body.push(item);
                    }
                }
            });
            i < 2 && dataRender.header.push(header);
            i < 2 && dataRender.headerFix.push(headerFix);
            i > 2 && dataRender.body.push(body);
            i > 2 && dataRender.bodyFix.push(bodyFix);
        });
        this.setState({
            dataRender
        });
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
        for (let i = 2; i <= 30; i += 1) {
            arr1.push(i);
        }
        for (let j = 1; j <= 30; j += 1) {
            arr2.push(arr1);
        }
        return arr2;
    }
    getListWidth() {
        const data = this.state.dataRender.header;
        const listWidth = [];
        if (data[0] && data[0].length > 0) {
            for (let i = 0; i < data[0].length; i++) {
                listWidth.push(ww)
            }
            return listWidth;
        }
        return [];
    }
    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                {this.state.dataRender.body[0] && <>
                    <View style={{ height: hightColumn * 2 }}>
                        <ScrollView >
                            <View style={{ flexDirection: 'row' }}>
                                <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                                    <Rows
                                        data={this.state.dataRender.headerFix}
                                        textStyle={styles.text}
                                        style={{ height: hightColumn, backgroundColor: '#537791' }}
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
                                            console.log('row header scroll', event.nativeEvent);//水平滚动距离
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
                                            data={this.state.dataRender.header}
                                            textStyle={styles.text}
                                            style={{ height: hightColumn, backgroundColor: '#537791' }}
                                            widthArr={this.getListWidth()}
                                        />
                                    </Table>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <ScrollView >
                        <View style={{ flexDirection: 'row' }}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
                                <Rows
                                    data={this.state.dataRender.bodyFix}
                                    textStyle={styles.text}
                                    style={{ height: hightColumn }}
                                    widthArr={[ww, ww]}
                                />
                            </Table>
                            <ScrollView
                                horizontal={true}
                                ref={(view) => { this.rowsScrollView = view; }}
                                scrollEventThrottle={5}
                                onScroll={(event) => {
                                    {
                                        console.log('rows body scroll', event.nativeEvent);
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
                                        data={this.state.dataRender.body}
                                        textStyle={styles.text}
                                        style={{ height: hightColumn }}
                                        widthArr={this.getListWidth()}
                                    />
                                </Table>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    text: { margin: 6 },
});
