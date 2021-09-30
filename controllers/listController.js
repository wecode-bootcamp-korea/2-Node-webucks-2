import {
  getCategoryService,
  getCategoryByIdService,
} from '../services/listService';
import { ERRORS } from '../utils/error';

export const getCategoryController = async (req, res) => {
  const categoryList = await getCategoryService();
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: categoryList,
    });
  } catch (err) {
    res.status(500).send(ERRORS.NO_ITEMS);
  }
  return categoryList;
};

export const getCategoryByIdController = async (req, res) => {
  const { id } = req.params;
  const categoryId = await getCategoryByIdService(id);
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: categoryId,
    });
  } catch (err) {
    res.status(500).send(ERRORS.NO_ITEMS);
  }
  return categoryId;
};
