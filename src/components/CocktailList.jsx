import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  // Ensure drinks is always an array
  const drinksArray = Array.isArray(drinks) ? drinks : [];

  if (drinksArray.length === 0) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }

  const formattedDrinks = drinksArray.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => (
        <CocktailCard key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};
export default CocktailList;
