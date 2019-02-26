import React from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon,
     Title, View, Button, Text, Card, CardItem } from "native-base";
import DatePicker from 'react-native-datepicker';
import { DrawerActions } from 'react-navigation';

export default class DanhMucThongKe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dateFirst: '',dateEnd:'', listItem: [], countHD: ''
        }
      }
    static navigationOptions = {
        header: null,
    }
    getHoaDonNhap(){
      fetch('http://163.44.192.123/caonv/listhoadonnhap.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ngay1: this.state.dateFirst,
                ngay2: this.state.dateEnd
            })
        }).then((response) => response.json())
            .then((responseJson) => {
              this.props.navigation.navigate("HoaDonNhap",{
                countHD: responseJson.TongPhieu.Tong,
                listItem: responseJson.PhieuNhap,
                ngayBD: this.state.dateFirst,
                ngayKT: this.state.dateEnd
              });
              console.log(responseJson.PhieuNhap);
            }).catch((error) => {
                console.error(error);
            });
    }
    getHoaDonXuat(){
      fetch('http://163.44.192.123/caonv/listhoadonxuat.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ngay1: this.state.dateFirst,
                ngay2: this.state.dateEnd
            })
        }).then((response) => response.json())
            .then((responseJson) => {
              this.props.navigation.navigate("HoaDonXuat",{
                countHD: responseJson.TongPhieu.Tong,
                listItem: responseJson.PhieuXuat,
                ngayBD: this.state.dateFirst,
                ngayKT: this.state.dateEnd
              });
              console.log(responseJson.PhieuXuat);
            }).catch((error) => {
                console.error(error);
            });
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
            <Title>Thống Kê</Title>
          </Body>
          <Right />
        </Header>
        <Content  padder>
        <View style={{ padding: 5, flexDirection: 'row' }}>
        <DatePicker
              style={{ width: '45%', marginTop: 5 }}
              date={this.state.dateFirst}
              mode="date"
              placeholder="Từ ngày"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: { position: 'absolute', top: 5, left: 0 }
              }}
              onDateChange={(date) => { this.setState({ dateFirst: date }) }} />
              <Text style={{width:'10%'}}></Text>
            <DatePicker
              style={{ width: '45%', marginTop: 5 }}
              date={this.state.dateEnd}
              mode="date"
              placeholder="Đến ngày"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: { position: 'absolute', left: 0, top: 5 }
              }}
              onDateChange={(date) => { this.setState({ dateEnd: date }) }} />
        </View>
        <View style={{ padding: 5, flexDirection: 'column' }}>
          <Button full rounded primary
          onPress={this.getHoaDonNhap.bind(this)}>
            <Text >Hóa Đơn Nhập Kho NPP</Text>
          </Button>
          <Button full rounded primary
          style={{marginTop:10}}
          onPress={this.getHoaDonXuat.bind(this)}>
            <Text >Hóa Đơn Xuất Kho KH</Text>
          </Button>
        </View>
        </Content>
      </Container>
    );
  }
}