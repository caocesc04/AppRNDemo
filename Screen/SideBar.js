import React from "react";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";
const routes = [
  {
    name: "Danh Mục Hàng",
    route: "DanhMucHang",
    icon: "grid",
    bg: "#C5F442"
  },
  {
    name: "Thống Kê Hóa Đơn",
    route: "ThongKe",
    icon: "pulse",
    bg: "#C5F442"
  },
  {
    name: "Báo Cáo Tài Chính",
    route: "BaoCao",
    icon: "calculator",
    bg: "#C5F442"
  }
];
export default class SideBar extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.setWrapperRef = this.setWrapperRef.bind(this);
  //   this.handleClickOutside = this.handleClickOutside.bind(this);
  // }
  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside);
  // }
  // setWrapperRef(node) {
  //   this.wrapperRef = node;
  // }
  // handleClickOutside(event) {
  //   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //     alert('You clicked outside of me!');
  //   }
  // }
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                button
                  onPress={() => this.props.navigation.navigate(data.route)}>
                  <Icon
                  active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text>{data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

