import React from "react";
import { View } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon,
     Title, Button, Text, DatePicker } from "native-base";
import { DrawerActions } from 'react-navigation';

export default class BaoCao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dateFirst: '',dateEnd:''
        }
      }
    static navigationOptions = {
        header: null,
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Doanh Thu</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <View style={{ padding: 5, flexDirection: 'row' }}>
        <DatePicker
            style={{ width: '100%', marginTop: 5 }}
            defaultDate={new Date()}
            date={this.state.dateFirst}
            timeZoneOffsetInMinutes={undefined}
            androidMode={"default"}
            placeHolderText="Từ ngày"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(date) => { this.setState({ dateFirst: date }) }}
            customStyles={{
                dateIcon: { position: 'absolute', left: 0, top: 0, marginLeft: 0 }
              }}
            />
        <DatePicker
            style={{ width: '100%', marginTop: 5 }}
            defaultDate={new Date()}
            date={this.state.dateEnd}
            timeZoneOffsetInMinutes={undefined}
            androidMode={"default"}
            placeHolderText="Đến ngày"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(date) => { this.setState({ dateEnd: date }) }}
            customStyles={{
                dateIcon: { position: 'absolute', left: 0, top: 0, marginLeft: 0 }
              }}
            />
        </View>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}>
            <Text>Xác Nhận</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}