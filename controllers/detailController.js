import {
  getDrinkListService,
  getDrinkDetailService,
} from '../services/detailService';
import { ERRORS } from '../utils/error';

export const getDrinkListController = async (req, res) => {
  const drinkList = await getDrinkListService();
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: drinkList,
    });
  } catch (err) {
    res.status(500).send(ERRORS.NO_ITEMS);
  }
};

export const getDrinkDetailController = async (req, res) => {
  const { id } = req.params;
  const drinkDetail = await getDrinkDetailService(id);
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: drinkDetail,
    });
  } catch (err) {
    res;
    res.status(500).send(ERRORS.NO_ITEMS);
  }
};
