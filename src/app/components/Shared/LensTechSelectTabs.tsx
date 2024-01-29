'use client';
import { useLensGuideActions, useLensGuideState } from '@/store';
import { productData } from '@/utils/constants/apiEndpoints';
import { removeHtmlAndSpecialChars, removeHtmlTags } from '@/utils/helpers';
import useProductData from '@/utils/hooks/useProductData';
import { Option } from '@/utils/types/ProductData';

const LensTechSelectTabs = () => {
  const { isLoading: sceneLoading } = useProductData(productData);
  const { currentProduct, allProducts } = useLensGuideState();
  const { setCurrentProduct } = useLensGuideActions();

  const handleClick = (title: string) => {
    const curProdName = removeHtmlAndSpecialChars(currentProduct?.name ?? '');
    const lastItem = curProdName?.split(' ').pop();

    const standardRemovedTitle = () =>
      title === 'Standard'
        ? lastItem
        : title
            .split(' ')
            .filter((word) => word !== 'Standard')
            .join(' ');

    const newTitle = () =>
      title === 'Standard'
        ? lastItem
        : `${standardRemovedTitle()} ${lastItem}`.trim();

    const tempItem = allProducts?.find((item) => item.name === newTitle());

    if (tempItem) {
      setCurrentProduct(tempItem);
    }
  };

  const renderButtons = (arr?: Option[]) => {
    if (!arr) return;
    const unique = new Set<string>();
    const uniquePairs = new Set<Option>();

    arr.forEach((item) => {
      const value = item.optionTech?.displayTitle;
      if (value !== undefined && !uniquePairs.has(item)) {
        uniquePairs.add(item);
        unique.add(removeHtmlAndSpecialChars(value) ?? '');
      }
    });

    const uniqueArr = Array.from(unique);

    return (
      <>
        {uniqueArr.map((title, i) => (
          <li
            key={i}
            onClick={() => handleClick(title ?? '')}
            className={`LensTechSelectTabs__item border
              ${currentProduct?.optionTech?.displayTitle === title ? 'border-black' : ''}
              mb-4 hover:border-black duration-300 rounded-md px-8 py-9 cursor-pointer text-xs font-semibold`}
          >
            <button
              disabled={sceneLoading}
              className="LensTechSelectTabs__button"
            >
              <span>{removeHtmlTags(title?.split(' ').join('\n') ?? '')}</span>
            </button>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="LensTechSelectTabs p-7">
      <div className="LensTechSelectTabs LensGuideModal__lens-tech-select-tabs ">
        <div className="head capitalize font-bold text-md mb-4">
          {currentProduct?.partType}
        </div>
        <div className="flex flex-col"></div>
        <div className="body">
          <ul className="flex justify-between gap-3">
            {renderButtons(allProducts)}
          </ul>
          <div className="gap-2 flex flex-col">
            <p className="LensTechSelectTabs__selected-subtitle font-light text-sm">
              {currentProduct?.optionTech?.displaySubtitle}
            </p>
            <p className="LensTechSelectTabs__selected-subtitle__see-better font-light text-sm">
              <span className="uppercase font-bold">SEE BETTER.</span>{' '}
              Industry-leading materials for unrivalled performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensTechSelectTabs;
