"use client"
import ResponsiveAppBar from "./ui/ResponsiveAppBar"
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Contacts from "./ui/Contacts"
import { Breadcrumb, Layout, Menu, theme,   Row, Col, List } from 'antd';
const { Header, Content, Footer } = Layout;

const themes = createTheme({
  palette: {
    primary: {
      main: "#33bfff",
      // main: red[500],
    },
  },
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
<>  <ThemeProvider theme={themes}>

         <Layout>
          <div className="lg:w-4/5 lg:m-auto">
      <Header style={{ display: 'flex', alignItems: 'center', height: 'auto' }}>
      <ResponsiveAppBar />
      </Header>
      <Content >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
            
            {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <p>Тел.: +79377283649; Вакуленко Александр Николаевич; ИНН: 344807806431
        <hr></hr><br></br>
        Разработано в <a href="https://kopi34.ru/">kopi34.ru</a> ©2024</p>
      </Footer>
      </div>
    </Layout>
      <Contacts />
      </ThemeProvider>
          </>


  );
}
