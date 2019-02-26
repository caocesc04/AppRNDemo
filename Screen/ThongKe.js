import React, { Component } from "react";
import HoaDonNhap from "./HoaDonNhap";
import HoaDonXuat from "./HoaDonXuat";
import DanhMucThongKe from "./DanhMucThongKe";
import { createStackNavigator, createAppContainer } from "react-navigation";
const MainNavigator = createStackNavigator(
  {
    DanhMucThongKe: { screen: DanhMucThongKe },
    HoaDonNhap: { screen: HoaDonNhap },
    HoaDonXuat: { screen: HoaDonXuat },
  },
  {
    headerMode: 'screen',
    mode: 'modal',
    navigationOptions: {
        gesturesEnabled: false,
        headerLeft: null,
        headerTintColor: '#FFD700',
        headerStyle: { backgroundColor: '#000080' }
    },
});
export default ThongKe = createAppContainer(MainNavigator);