

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { ListItem, SearchBar, Avatar, Header } from "react-native-elements";
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

class Periodos extends Component {
  constructor(props) {
    super(props);
//{ route, navigation }
    this.props.navigation.setOptions({title: props.route.params.titulo});
    this.state = {
      data: props.route.params.periodos,
      titulo: props.route.params.titulo,
      navigation: props.navigation
    };
    this.arrayholder = this.state.data;
  }
  componentDidMount() {
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 8,
          width: "86%",
          marginLeft: "14%"
        }}
      />
    );
  };
  render() {
    return (
      <SafeAreaView containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                  <ListItem
                    Component={TouchableScale}
                    friction={90} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    onPress={() => this.state.navigation.navigate('INFORMACOES', {titulo: this.state.titulo, periodo: item})}
                    linearGradientProps={{
                    colors: ['#3e509f', '#42a1e7'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                    }}
                    style={{borderRadius:10, overflow: 'hidden'}}
                    ViewComponent={LinearGradient} // Only if no expo
                   >
                    <ListItem.Content>
                      <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>{item.periodo}</ListItem.Title>
                      <ListItem.Subtitle style={{ color: 'white' }}>{}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                )}
                keyExtractor={item => item.periodo}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
              />
      </SafeAreaView>
      );
  }
}

export default Periodos;
