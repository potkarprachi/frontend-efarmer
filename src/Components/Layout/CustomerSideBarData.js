import ViewListIcon from '@mui/icons-material/ViewList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const CustomerSideBarData=[
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/customerdashboard"
    },
    {
        title: "List of Crops",
        icon: <ViewListIcon/>,
        link: "/"
    },
    {
        title: "Order",
        icon: <ShoppingCartIcon/>,
        link: "/"
    },
    {
        title: "Transcations",
        icon: <CurrencyRupeeIcon/>,
        link: "/customertransaction"
    }
]