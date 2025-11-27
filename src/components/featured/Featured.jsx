import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <p className="title">Total Revenue</p>
            <MoreVertIcon />
        </div>
        <div className="bottom">
          <div className="featuredChart">
             <CircularProgressbar value={70} text="70%" strokeWidth={5} className="progressBar"/>
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="descript">
            Previous transection processing.
            Last payment may not be included.
          </p>
          <div className="statisticks">
            <div className="items">
                <p className="title">Target</p>
                 <div className="item positive">
                    <KeyboardArrowUpIcon />
                    <span className="title">$12.k</span>
                 </div>
            </div>
            <div className="items">
                <p className="title">Last Week</p>
                 <div className="item negative">
                    <KeyboardArrowDownIcon />
                    <span className="title">$12.k</span>
                 </div>
            </div>
            <div className="items">
                <p className="title">Last Month</p>
                 <div className="item positive">
                    <KeyboardArrowUpIcon />
                    <span className="title">$12.k</span>
                 </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured