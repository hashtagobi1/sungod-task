import { useLensGuideActions, useLensGuideState } from '@/store';
import { removeHtmlAndSpecialChars } from '@/utils/helpers';
import { Option } from '@/utils/types/ProductData';

const SwatchColourContainer = () => {
  const { currentProduct, allProducts } = useLensGuideState();
  const { setCurrentProduct } = useLensGuideActions();
  const curProdName = removeHtmlAndSpecialChars(currentProduct?.name ?? '');
  const lastItem = curProdName?.split(' ').pop();

  const standardRemovedTitle = (title: string) =>
    title === 'Standard'
      ? lastItem
      : title
          .split(' ')
          .filter((word) => word !== 'Standard')
          .join(' ');

  const newTitle = (title: string) =>
    title === 'Standard'
      ? lastItem
      : `${standardRemovedTitle(title)} ${lastItem}`.trim();
  if (currentProduct) {
    const title = removeHtmlAndSpecialChars(
      currentProduct?.optionTech?.displayTitle ?? ''
    );
    newTitle(title ?? '');
  }
  const renderGradient = (gradient: string) => {
    const colorsAndPercent: string[] = [];

    if (!gradient) return;
    // Regular expression pattern to match colors and percentages
    const regex = /#([0-9a-fA-F]{6}) (\d+)%/g;

    // Array to store extracted values
    const extractedValues = [];

    // Match all occurrences in the string
    let match;
    while ((match = regex.exec(gradient)) !== null) {
      const color = match[1]; // Color value
      const percentage = match[2]; // Percentage value
      extractedValues.push({ color, percentage });
    }
    extractedValues.map((item) => {
      colorsAndPercent.push(`#${item.color} ${item.percentage}%`);
    });

    return `linear-gradient(${colorsAndPercent.join()})`;
  };

  const handleClick = (selectedColor: Option) => {
    const name = selectedColor.name;
    allProducts?.map((item) => {
      if (item.name === name) {
        setCurrentProduct(item);
      }
    });
  };
  return (
    <div className="SwatchColour__container p-7">
      <div className="SwatchColour__heading font-bold pb-8">
        {currentProduct?.name}
      </div>
      <div className="SwatchColour__options grid grid-cols-6  gap-3">
        {allProducts?.map((item, i) => {
          const gradientString = item.swatchStyle.styles.slice(0, -1);
          if (
            removeHtmlAndSpecialChars(item.optionTech?.displayTitle ?? '') ===
            removeHtmlAndSpecialChars(
              currentProduct?.optionTech?.displayTitle ?? ''
            )
          ) {
            renderGradient(gradientString);
            return (
              <button
                key={i}
                onClick={() => handleClick(item)}
                style={{
                  background: renderGradient(gradientString),
                }}
                className={`SwatchColour__item rounded-full

                 items-center justify-center   duration-300 transition-all border border-black

                ${item === currentProduct ? 'w-12 h-12 border-opacity-100 ' : 'w-16 h-16 border-opacity-10'}
                  text-black  shadow-md 
                
                 `}
              ></button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SwatchColourContainer;
