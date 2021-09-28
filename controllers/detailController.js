import { detailService } from '../services';

const getDrinkList = async (req, res) => {
  const drinkList = await detailService.getDrinkList();
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: drinkList,
    });
  } catch (err) {
    res.status(500).send('음료 정보를 불러올 수 없습니다. 다시 시도해주세요.');
  }
};

const getDrinkDetail = async (req, res) => {
  const id = req.params.id;
  const drinkDetail = await detailService.getDrinkDetail(id);
  try {
    res.status(200).json({
      message: 'SUCCESS',
      data: drinkDetail,
    });
  } catch (err) {
    res
      .status(500)
      .send('음료 상세정보를 불러올 수 없습니다. 다시 시도해주세요.');
  }
};

export default { getDrinkList, getDrinkDetail };
