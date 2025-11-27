import "./widget.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const Widget = ({ type }) => {
    let data;
    const amount = 100;
    const diff = 20;
    switch(type){
        case "user":
            data = {
                title: "USER",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineIcon className="icon"/>,
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: true,
                link: "View All Orders",
                icon: <ShoppingCartOutlinedIcon className="icon"/>,
            };
            break;
        case "earning":
            data = {
                title: "Earning",
                isMoney: true,
                link: "View net earning",
                icon: <MonetizationOnIcon className="icon"/>,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: <AccountBalanceWalletIcon className="icon"/>,
            };
            break;
            default:
                break;
    }
  return (
    <div className="widget">
       <div className="left">
        <p className="title">{data.title}</p>
        <p className="count">
            {data.isMoney && "$"} {amount}
        </p>
        <p className="link">{data.link}</p>
       </div>
       <div className="right">
        <div className="percent poitive">
           <KeyboardArrowUpIcon />
            {diff}</div>
        {data.icon}
       </div>
    </div>
  )
}

export default Widget;