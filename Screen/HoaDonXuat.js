import React,{Component} from "react";
import {StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import { Container ,Header, Title, Left, Icon, Button, Body, Content,Text,View } from "native-base";
import { DrawerActions,createStackNavigator } from 'react-navigation';

class HoaDongXuat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listView: this.props.navigation.getParam('listItem'),
            countHD: this.props.navigation.getParam('countHD'),
            ngayBD: this.props.navigation.getParam('ngayBD'),
            ngayKT: this.props.navigation.getParam('ngayKT')
        }
    }
    OpenSecondActivity(ID) {
        this.props.navigation.navigate('Second', { IDHoaDonXuat: ID });
    }
    
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Danh sách hóa đơn xuất cho khách</Title>
          </Body>
        </Header>
        <Content padder>
        <View style={{  flexDirection: 'row', alignSelf: 'center' }}>
        <Text>Từ ngày </Text>
        <Text>{this.state.ngayBD}</Text>
        <Text> đến ngày </Text>
        <Text>{this.state.ngayKT}</Text>
        </View>
        <View style={{  flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={{fontSize:20}}>Tổng số hóa đơn: </Text>
        <Text style={{fontSize:20, color:"red"}}>{this.state.countHD}</Text>
        </View>
          <FlatList
                data={this.state.listView}
                renderItem={({ item }) =>
            <View style={{ flex: 1, flexDirection: 'column', borderBottomWidth:1 }}>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Mã Phiếu:'} </Text>
                    <Text style={{width: '50%',marginTop:1,fontSize: 18,color: 'red',}} > {item.MaPhieu} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Nhân viên lập phiếu:'} </Text>
                    <Text style={styles.textviewValue} > {item.TenNhanVien} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Ngày xác nhận:'} </Text>
                    <Text style={styles.textviewValue} > {item.NgayNhap} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Khách Hàng:'} </Text>
                    <Text style={styles.textviewValue} > {item.TenKho} </Text>
                </View>
                <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        onPress={this.OpenSecondActivity.bind(this, item.key)}>
                        <Text style={{ color: '#0099ff', fontSize: 20 }}> Chi Tiết </Text>
                </TouchableOpacity>
            </View>
            }
                // keyExtractor={item => item.ID}
                // stickyHeaderIndices={this.state.stickyHeaderIndices}
            />
        </Content>
      </Container>
    );
  }
}
class CTHoaDonXuat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCTHoaDonXuat: [],
            // listView: this.props.navigation.getParam('listItem'),
            // countHD: this.props.navigation.getParam('countHD'),
            // ngayBD: this.props.navigation.getParam('ngayBD'),
            // ngayKT: this.props.navigation.getParam('ngayKT')
        }
    }
    componentDidMount(){
        fetch('http://163.44.192.123/caonv/detailhoadonxuat.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDHoaDonXuat: this.props.navigation.state.params.IDHoaDonXuat
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({listCTHoaDonXuat: responseJson});
              console.log(responseJson);
            }).catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
          <Container>
            <Header>
                <Left></Left>
              <Body>
                <Title>Chi tiết hóa đơn xuất kho</Title>
              </Body>
            </Header>
            <Content padder>
            <View style={{  flexDirection: 'row' }}>
                        <Text style={{width:'30%',fontSize: 18, fontWeight:'bold'}} > Tên Hàng </Text>
                        <Text style={{width: '20%',fontSize: 18, fontWeight:'bold'}} > Số Lượng Yêu Cầu </Text>
                        <Text style={{width: '20%',fontSize: 18, fontWeight:'bold'}} > Số Lượng Xuất </Text>
                        <Text style={{width: '30%',fontSize: 18, fontWeight:'bold'}} > Đơn Giá </Text>
                    </View>
              <FlatList
              style={{marginTop: 5}}
                    data={this.state.listCTHoaDonXuat}
                    renderItem={({ item }) =>
                    <View style={{ flex: 1, flexDirection: 'column', borderBottomWidth:1 }}>
                    <View style={{  flexDirection: 'row' }}>
                        <Text style={{width:'30%',fontSize: 18}} > {item.MaPhieu} </Text>
                        <Text style={{width: '20%',fontSize: 18}} > {item.NgayNhap} </Text>
                        <Text style={{width: '20%',fontSize: 18}} > {item.TenNhanVien} </Text>
                        <Text style={{width: '30%',fontSize: 18}} > {item.TenKho} </Text>
                    </View>
                    </View>
                }
                    // keyExtractor={item => item.ID}
                    // stickyHeaderIndices={this.state.stickyHeaderIndices}
                />
            </Content>
          </Container>
        );
      }
}
export default Myproject = createStackNavigator(
    {
        First: { screen: HoaDongXuat },
        Second: { screen: CTHoaDonXuat },
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
            header: null
    },
    }
);
const styles = StyleSheet.create(
    {
        MainContainer: {
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#F5FCFF'
        },
        textViewContainer: {
            width: '50%',
            marginTop: 1,
            marginLeft: 2,
            fontSize: 18,
            color: '#000',
        },
        textviewValue: {
            width: '50%',
            marginTop: 1,
            fontSize: 18,
            color: '#000',
        },
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
        },
        viewrow: {
            marginLeft: 5, marginRight: 5, padding: 5, flexDirection: 'row', marginTop: 5, borderWidth: 1, borderRadius: 10
        },
        viewcolumn: {
            marginLeft: 5, marginRight: 5, padding: 5, flexDirection: 'column', marginTop: 5, borderWidth: 1, borderRadius: 10
        },
        fontText: {
            color: '#006381',
            marginLeft: 5, textAlignVertical: 'center', marginTop: 5, marginLeft: 5, padding: 5, marginRight: 5,
            fontSize: 18, borderWidth: 1, borderRadius: 10,
            height: 50
        },
        icon: {
            width: 26,
            height: 26,
        },
        content: {
            // not cool but good enough to make all inputs visible when keyboard is active
            paddingBottom: 30,
        }
    });
