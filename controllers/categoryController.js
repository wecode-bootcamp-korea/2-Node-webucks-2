import { categoryService } from '../services';

const getCategoryList = async (req, res) => {
  try {
    const categoryList = await categoryService.getCategoryList();
    res.json(categoryList);
  } catch (error) {
    console.log(error);
  }
};

export default { getCategoryList };
