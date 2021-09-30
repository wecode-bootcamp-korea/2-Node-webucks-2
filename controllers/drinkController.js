import { drinkService } from '../services';

const getDrinkList = async (req, res) => {
  try {
    const drinkList = await drinkService.getDrinkList();
    res.status(200).json({ message: 'SUCCESS', drinkList });
  } catch (error) {
    console.log(error);
  }
};

const getDrinkDetailById = async (req, res) => {
  try {
    const drinkId = Number(req.params.id);
    const detail = await drinkService.getDrinkDetailById(drinkId);
    res.status(200).json({ message: 'SUCCESS', detail });
  } catch (error) {
    console.log(error);
  }
};

export default { getDrinkList, getDrinkDetailById };
