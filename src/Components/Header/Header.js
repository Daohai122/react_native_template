import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import styles from "./HeaderStyle";
import NavHeader from "./NavHeader";
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {this.props.NoNavHeader?null:<NavHeader /> }
        
        <View style={[styles.viewHeader, this.props.backgroundColor]}>
        {this.props.IconLeft ? (
          <TouchableOpacity
            style={styles.IconLeft}
            onPress={() => this.props.leftFunction()}>
            <Icon
              name={this.props.IconLeft.name}
              type={this.props.IconLeft.type}
              style={[
                {color: '#fff', fontSize: this.props.IconLeft.size ?? 25},
              ]}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.IconLeft} />
        )}
        <View style={styles.ContentHeader}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {this.props.title}
          </Text>
        </View>
        {this.props.IconRight ? (
          <TouchableOpacity
            style={styles.IconLeft}
            onPress={() => this.props.rightFunction()}>
            <Icon
              name={this.props.IconRight.name}
              type={this.props.IconRight.type}
              style={{color: '#fff', fontSize: this.props.IconRight.size ?? 25}}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.IconLeft} />
        )}
      </View>
      </View>
    );
  }
}


