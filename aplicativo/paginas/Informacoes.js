

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { ListItem, SearchBar, Avatar, Header } from "react-native-elements";
import AnimatedBar from "react-native-animated-bar";

class Informacoes extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({title: props.route.params.titulo});
    this.state = {
      data: props.route.params.periodo,
      progress: 0.5,
    };
    this.arrayholder = this.state.data;
  }
  componentDidMount() {
    /*const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 1000);*/
  }
  render() {
    return (
      <SafeAreaView containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <ScrollView>
          <Text style={{fontWeight: 'bold',fontSize: 28, padding: 5, textAlign: 'center'}}>{this.state.data.periodo}</Text>
          <View>
            <Text style={{fontSize: 28, padding: 5}}>Turbidez:</Text>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.turbidez.exigido/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Exigido: {this.state.data.turbidez.exigido}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.turbidez.realizado/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Realizado: {this.state.data.turbidez.realizado}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.turbidez.conforme/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Conforme: {this.state.data.turbidez.conforme}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 28, padding: 5}}>Cor aparente:</Text>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.corAparente.exigido/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Exigido: {this.state.data.corAparente.exigido}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.corAparente.realizado/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Realizado: {this.state.data.corAparente.realizado}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.corAparente.conforme/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Conforme: {this.state.data.corAparente.conforme}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 28, padding: 5}}>Cloro residual livre:</Text>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.cloroResidualLivre.exigido/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Exigido: {this.state.data.cloroResidualLivre.exigido}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.cloroResidualLivre.realizado/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Realizado: {this.state.data.cloroResidualLivre.realizado}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.cloroResidualLivre.conforme/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Conforme: {this.state.data.cloroResidualLivre.conforme}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 28, padding: 5}}>Coliforme total:</Text>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.coliformeTotal.exigido/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Exigido: {this.state.data.coliformeTotal.exigido}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.coliformeTotal.realizado/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Realizado: {this.state.data.coliformeTotal.realizado}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.coliformeTotal.conforme/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Conforme: {this.state.data.coliformeTotal.conforme}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 28, padding: 5}}>E-Coli:</Text>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.eColi.exigido/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Exigido: {this.state.data.eColi.exigido}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.eColi.realizado/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Realizado: {this.state.data.eColi.realizado}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
            <View style={{flexDirection: "row"}}>
              <AnimatedBar
                progress={this.state.data.eColi.conforme/1000}
                height={null}
                borderColor="#FFF"
                barColor="blue"
                borderRadius={9}
                borderWidth={5}
                duration={500}
                row
              >
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{ color: "#FFF", backgroundColor: "transparent", fontSize: 30, fontWeight: 'bold' }}>
                    Conforme: {this.state.data.eColi.conforme}
                  </Text>
                </View>
              </AnimatedBar>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      );
  }
}
//{Math.round(this.state.progress * 100)}%
export default Informacoes;
