import {
    LoginPage,
    HomePage,
    HomeContent,
    Dashboard,
    Settings,
    RequiredAuth
  } from '../components/global'

export default [
    {
        path:"/",
        element:<HomePage/>,
        children:[
          {
            index:true,
            element:<HomeContent></HomeContent>
          },
          {
            path:"/login",
            element:<LoginPage></LoginPage>,
            RouteName:"Login",
            protected:false
          },
          {
            path:"/dashboard",
            element:<RequiredAuth><Dashboard/></RequiredAuth>,
            RouteName:"Dashboard",
            protected:true
          },
          {
            path:"/settings",
            element:<RequiredAuth><Settings/></RequiredAuth>,
            RouteName:"Settings",
            protected:true
          }
        ]
      }
]