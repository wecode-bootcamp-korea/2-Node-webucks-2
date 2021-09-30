import { categoryService } from '../services';

const findAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.findAllCategories();
    res.status(200).json({
      message: 'SUCCESS',
      data: categories,
    });
  } catch {
    res.status(404).json({
      message: 'FAILED',
    });
  }
};

export default { findAllCategories };
