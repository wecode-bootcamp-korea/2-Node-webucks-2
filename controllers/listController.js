import { listService } from '../services';

const getCategory = async (req, res) => {
  const categoryList = await listService.getCategory();
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: categoryList,
    });
  } catch (err) {
    res.status(500).send('카테고리를 불러올 수 없습니다. 다시 시도해주세요.');
  }
  return categoryList;
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const categoryId = await listService.getCategoryById(id);
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: categoryId,
    });
  } catch (err) {
    res.status(500).send('카테고리ID를 불러올 수 없습니다. 다시 시도해주세요.');
  }
  return categoryId;
};

export default { getCategory, getCategoryById };
