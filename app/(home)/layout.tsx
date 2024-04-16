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
      <Content style={{ padding: '0 48px' }}>
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
      <div className='p-4'>

<Row gutter={[12, 12]}>
    <Col  span={24} md={8} >
    <ul>
        <li><b>Контакты:</b></li>
        <li>8-937-728-36-49</li>
    </ul>
    </Col>
    <Col  span={24} md={8} >
    <ul>
        <li><b>Контакты:</b></li>
        <li>8-937-728-36-49</li>
    </ul>

    </Col>
    <Col  span={24} md={8} >
    <ul>
        <li><b>Контакты:</b></li>
        <li>8-937-728-36-49</li>
    </ul>

    </Col>
</Row>
</div>

        Разработано в <a href="https://kopi34.ru/">kopi34.ru</a> ©2024
      </Footer>
      </div>
    </Layout>
      <Contacts />
      </ThemeProvider>
          </>


  );
}
