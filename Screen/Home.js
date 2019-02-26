import React, { Component } from "react";
import DanhMucHang from "./DanhMucHang";
import BaoCao from "./BaoCao";
import ThongKe from "./ThongKe";
import SideBar from "./SideBar";
import { createDrawerNavigator } from "react-navigation";
const HomeScreenRouter = createDrawerNavigator(
  {
    DanhMucHang: { screen: DanhMucHang },
    ThongKe: { screen: ThongKe },
    BaoCao: { screen: BaoCao },
  },
  {
    initialRouteName: 'DanhMucHang',
    contentComponent: props => <SideBar {...props} />
  },
);
export default HomeScreenRouter;
