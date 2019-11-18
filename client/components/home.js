import React, { Component } from "react"
import { View, Text, ScrollView, Button, SafeAreaView } from "react-native"
import { Overlay } from "react-native-elements"
import { styles, SH, SW } from "../styles/styles"
import { connect } from "react-redux"
import { url } from "../url"
import Login from './login'
import PopularItems from "./popularItems"
import FavoriteServicers from "./favoriteServicers"
import HomeTopBar from "./homeTopBar"
import Servicer from "./servicer"



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      servicers:[],
      isVisible: false,
      loginVisible: false
    }
  }

  componentWillMount = () => {
    fetch(url+"vendors")
    .then(response => response.json())
    .then(data => {
      this.setState({
        servicers: data,
      })
    })
    .catch(err => alert(err))
  }

  serviceSelected = type => {
    this.props.navigation.navigate("Service", type)
  }

  showModal = (item) => {
    this.setState({
      isVisible: true
    })
  }

  showSignIn = () => {
    console.log('hi')
    this.setState({
      loginVisible: true
    })
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.topPad} />
          <HomeTopBar signIn={this.showSignIn} />
          <Text>Catergories</Text>
          <PopularItems navigateToServicer={this.serviceSelected} />
          <Text style={{ paddingTop: 20 }}>Servicers</Text>
          <FavoriteServicers 
            servicers={this.state.servicers} 
            servicerSelected={(item, evt) => this.showModal(item, evt)}/>
          <Overlay
            isVisible={this.state.isVisible}
            windowBackonBackdropPress={() => this.setState({ isVisible: false })}
            groundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="red"
            width="auto"
            height="auto"
          >
            <Servicer closeModal={() => {
              console.log("hi")
              this.setState({ isVisible: false })
            }} />
          </Overlay>

          <Overlay
            isVisible={this.state.loginVisible}
            windowBackonBackdropPress={() => this.setState({ loginVisible: false })}
            groundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="white"
            width={SW*0.7}
            height={SH*0.5}
          >
            <Login />
            <Button title='Close' onPress={() => {
              this.setState({ loginVisible: false })
            }} />
          </Overlay>
          <View style={{ padding: 30 }} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

mapStateToProps = state => {
  return {
    servicers: state.servicers
  }
}

mapDispatchToProps = dispatch => {
  return {
    getVendors: () => dispatch({type: "GET_VENDORS"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)