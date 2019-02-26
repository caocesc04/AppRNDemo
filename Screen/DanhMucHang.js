import React,{Component} from "react";
import {StyleSheet,FlatList} from 'react-native';
import { Container ,Header, Title, Left, Icon, Right, Button, Body, Content,Text,View } from "native-base";
import { DrawerActions } from 'react-navigation';

export default class DanhMucHang extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    constructor(props) {
        super(props);
        this.state = {
            listView: []
        }
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
            <Title>Danh sách hàng hóa</Title>
          </Body>
        </Header>
        <Content padder>
          <FlatList
                data={this.state.listView}
                renderItem={({ item }) =>
                <View style={{ flex: 1, flexDirection: 'column', borderBottomWidth:1 }}>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Tên Hàng:'} </Text>
                    <Text style={{width: '60%',marginTop: 1,fontSize: 18,color: 'red',}} > {item.TenHang} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Mã Hàng:'} </Text>
                    <Text style={styles.textviewValue} > {item.MaHang} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Đơn Vị Tính:'} </Text>
                    <Text style={styles.textviewValue} > {item.DonViTinh} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Giá Mua:'} </Text>
                    <Text style={styles.textviewValue} > {item.DonGiaMua} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Giá Bán:'} </Text>
                    <Text style={styles.textviewValue} > {item.DonGiaBan} </Text>
                </View>
                <View style={{  flexDirection: 'row' }}>
                    <Text style={styles.textViewContainer} > {'Tên Nhóm:'} </Text>
                    <Text style={styles.textviewValue} > {item.TenNhom} </Text>
                </View>
                    {/* <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        onPress={this.OpenSecondActivity.bind(this, item.key)}>
                        <Text style={{ color: '#0099ff', fontSize: 20 }}> Chi Tiết </Text>
                    </TouchableOpacity> */}
                </View>
            }
                // keyExtractor={item => item.ID}
                // stickyHeaderIndices={this.state.stickyHeaderIndices}
            />
          {/* <Button full rounded dark
            style={{ marginTop: 10 }}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}>
            <Text>Goto Profiles</Text>
          </Button> */}
        </Content>
      </Container>
    );
  }

    componentDidMount(){
        fetch('http://163.44.192.123/caonv/getHangHoa.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    listView: responseJson,
                    stickyHeaderIndices: []
                });
                console.log(this.state.listView);
            })
            .catch((error) => {
                console.error(error);
            });
        }
}

const styles = StyleSheet.create(
    {
        MainContainer: {
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#F5FCFF'
        },
        textViewContainer: {
            width: '40%',
            marginTop: 1,
            marginLeft: 2,
            fontSize: 18,
            color: '#000',
        },
        textviewValue: {
            width: '60%',
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
