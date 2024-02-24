const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[{
      path:"Home",
      element:<Home/>
  },
  {
      path:"About",
      element:<About />
  },
  {
    path:"Contact",
    element:<Contact/>
  }]
  }
])