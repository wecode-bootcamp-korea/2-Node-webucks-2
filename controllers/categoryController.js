import { categoryService } from '../services';

const findAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.findAllCategories();
    res.status(201).json({
      message: 'SUCCESS',
      data: categories,
    });
  } catch {
    console.log(err);
  }
};

export default { findAllCategories };
