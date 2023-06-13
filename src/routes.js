import Products from "./Components/Pages/Products"
import Comments from "./Components/Comments"
import Users from "./Components/Users"
import Orders from "./Components/Orders"
import Offs from "./Components/Offs"
let route = [
    {path: '/products' , element: <Products/>},
    {path: '/comments' , element: <Comments/>},
    {path: '/users' , element: <Users/>},
    {path: '/orders' , element: <Orders/>},
    {path: '/offs' , element: <Offs/>},

]


export default route