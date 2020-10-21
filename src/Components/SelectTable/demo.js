import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import styleShare from "../../../style/styles";

class ScrollHorizontallChuyenKhoa extends Component {
    lisChuyenKhoaBackup = this.props.dataRender ?? []
    constructor(Props) {
        super(Props);
        this.state = {
            lisChuyenKhoa: this.props.dataRender ?? [],
            ScrollToIndex: this.props.ScrollToIndex,
        }
    }
    componentWillReceiveProps(props) {
        if (props.dataRender && this.state.lisChuyenKhoa != props.dataRender) {
            this.setState({
                lisChuyenKhoa: props.dataRender
            });
            this.lisChuyenKhoaBackup = props.dataRender;
        }
        if ((props.ScrollToIndex || props.ScrollToIndex == 0) && props.ScrollToIndex != this.state.ScrollToIndex) {
            this.setState({
                ScrollToIndex: props.ScrollToIndex
            }, () => this.fn_ScrollToIndex())
        }
    }
    fn_ScrollToIndex() {
        if (this.state.ScrollToIndex || this.state.ScrollToIndex == 0) {
            let index = this.state.ScrollToIndex;
            this.scrollView.scrollTo({ x: this.lisChuyenKhoaBackup[index].x - styleShare.screenWidth / 2 + this.lisChuyenKhoaBackup[index].width, Y: this.lisChuyenKhoaBackup[index].y, animated: true });
        }

    }
    componentDidMount() {
        this.fn_ScrollToIndex();
    }

    render() {
        return (
            <View>
                <ScrollView
                    ref={ref => (this.scrollView = ref)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {this.state.lisChuyenKhoa.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onLayout={e => { (this.lisChuyenKhoaBackup[index].x = e.nativeEvent.layout.x), (this.lisChuyenKhoaBackup[index].y = e.nativeEvent.layout.y), (this.lisChuyenKhoaBackup[index].width = e.nativeEvent.layout.width / 2); }}
                                style={[styles.ChuyenKhoa,{backgroundColor: this.state.ScrollToIndex == index? '#bdf5d2':'#dff5e7'}]}
                                key={index}
                                onPress={() => {
                                    this.scrollView.scrollTo({ x: this.lisChuyenKhoaBackup[index].x - styleShare.screenWidth / 2 + this.lisChuyenKhoaBackup[index].width, Y: this.lisChuyenKhoaBackup[index].y, animated: true });
                                    this.props.ChooseElement(item);
                                }}>
                                <Text style={{ marginTop: 5 }}>
                                    {item.SPECIALIST_NAME}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default ScrollHorizontallChuyenKhoa;

const styles = StyleSheet.create({
    ChuyenKhoa: {
        backgroundColor: '#dff5e7',
        height: 30,
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 30,
        marginHorizontal: 3,
        marginTop: 5,
    },
})