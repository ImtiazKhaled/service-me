import React, { Component } from "react"
import { ScrollView, View, Text } from "react-native"
import { Avatar, Button } from "react-native-elements"
import { connect } from "react-redux"
import { styles } from "../styles/styles"
import { url } from "../secrets"
import { Col, Grid } from "react-native-easy-grid"


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  render() {
    const { user } = this.props
    console.log(this.props)
    return (
      <ScrollView>
        {
          this.props.user.SignedIn ? 
          <View
          style={{ ...styles.center, paddingTop: 30 }}
          >
            <Avatar
              size="xlarge"
              rounded
              source={{ uri: user.ProfilePicture }}
            />
            <Text>
              {user.FName + " " + user.LName}
            </Text>
            <Text>
              {user.Email}
            </Text>
            <Text>
              {user.phone}
            </Text>
            <Text>
              {user.Type}
            </Text>
            <Text>
              {user.serviceType}
            </Text>
            <Text>
              {user.rate}
            </Text>
          </View> :
          <View>
            <Text>
              Please login
            </Text>
          </View>
        }
        
      </ScrollView>
    )
  }
}


const mapStateToProps = (state) => {  
  return {
    user: state.user
  }
} 

export default connect(mapStateToProps)(Profile)