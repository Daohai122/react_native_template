import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Text as TextSvg } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';
import numberRoutellet from "./numberRoutellet";
import { Icon } from "native-base";
import RouletteNumberService from "../LiveScreen/LiveApi";
import styles from "./searchStyle";
import moment from "moment";
const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (<>
      {data.amount ? <TextSvg
        key={index}
        x={labelCentroid[0] * 1.3}
        y={labelCentroid[1] * 1.3}
        fill={'white'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={14}
        stroke={'white'}
        strokeWidth={0.2}
      >
        {data.key}
      </TextSvg> : <TextSvg></TextSvg>}
    </>
    )
  })
}

const fomartDataForPice = (data) => {
  let dataResult = [];
  data.forEach(e => {
    const obj = {
      key: Object.keys(e)[0],
      amount: Object.values(e)[0],
      svg: numberRoutellet[Object.keys(e)[0]]
    }
    dataResult.push(obj)
  });
  return dataResult;
}
const RenderChart = ({ data, NumberRecomment }) => {
  return (
    <View style={{ flex: 1 }}>
      <PieChart
        style={styles.styleChart}
        valueAccessor={({ item }) => item.amount}
        data={data}
        // spacing={2}
        outerRadius={'100%'}
        padAngle={0.01}
        innerRadius={'30%'}
      >
        <Labels />
        {NumberRecomment && <TextSvg
          x={0}
          y={0}
          fill={'red'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={20}
          stroke={'red'}
          strokeWidth={0.2}
        >
          {NumberRecomment}
        </TextSvg>}
      </PieChart>
    </View>
  )
}
export default function SearchScreen() {
  const [dataPieAll, setDataPieAll] = useState([]);
  const [NumberRecomment, setNumberRecomment] = useState(null)
  const [dataPieForNumber, setDataPieForNumber] = useState([]);
  useEffect(() => {
    async function getDataPieAll() {
      const res = await RouletteNumberService.search(null, '5f6087597e6b4b144468c8d8', 1, moment().format(), 2, 0);
      if (res && res.result && res.result.ChartData) {
        setDataPieAll(fomartDataForPice(res.result.ChartData));
      }
      if (res && res.result && res.result.LatestNumber >= 0) {
        setNumberRecomment(res.result.LatestNumber)
      }
    }
    getDataPieAll();
  }, []);

  useEffect(() => {
    async function getDataPieAll() {
      const res = await RouletteNumberService.search(null, '5f6087597e6b4b144468c8d8', '', moment().format(), 3, 1);
      if (res && res.result && res.result.ChartData) {
        setDataPieForNumber(fomartDataForPice(res.result.ChartData));
      }
      if (res && res.result && res.result.LatestNumber >= 0) {
        setNumberRecomment(res.result.LatestNumber)
      }
    }
    getDataPieAll();
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
      <View style={styles.wrapContent}>
        <View style={styles.contentHeader}>
          <Text style={styles.textContentHeader}>Result (search number)</Text>
        </View>
        <RenderChart data={dataPieAll} NumberRecomment={NumberRecomment} />
        <View style={styles.wrapSearch}>
          <TouchableOpacity style={styles.buttonSearch}>
            <Icon style={{ color: 'white', fontSize: 24 }} name='search' type='Feather' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.wrapContent}>
        <View style={styles.contentHeader}>
          <Text style={styles.textContentHeader}>Result (all numbers)</Text>
        </View>
        <RenderChart data={dataPieForNumber} NumberRecomment={NumberRecomment} />
      </View>

    </View>
  )
}
