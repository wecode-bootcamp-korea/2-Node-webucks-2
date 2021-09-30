import { getDrinkListModel, getDrinkDetailModel } from '../models/detailDao';

export const getDrinkListService = async () => {
  const drinkList = await getDrinkListModel();
  return drinkList;
};

export const getDrinkDetailService = async id => {
  const drinkDetail = await getDrinkDetailModel(id);
  return drinkDetail;
};
