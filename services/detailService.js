import detailDao from '../models/detailDao';

const getDrinkList = async () => {
  const drinkList = await detailDao.getDrinkList();
  return drinkList;
};

const getDrinkDetail = async id => {
  const drinkDetail = await detailDao.getDrinkDetail(id);
  return drinkDetail;
};

export default { getDrinkList, getDrinkDetail };
