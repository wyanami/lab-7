import { useContext, } from 'react';
import CampIcon from './Camp-table.png';
import './style.css';
import GoodsContext from '../../context/goods.conext'; 

const CampComponent = () => {
const { removeAllGoods, selectedGoods } = useContext(GoodsContext);


const campClick = () => {
  const sum = selectedGoods.reduce((acc, cur) => {
      return acc + cur.cost;
    }, 0);

if ( sum >= 40) {
  removeAllGoods();
}
else {alert('Score is less than 40')}
};

return (
<div className="camp">
 <img src={CampIcon} onClick={campClick}  />
</div>
);
};

export default CampComponent;