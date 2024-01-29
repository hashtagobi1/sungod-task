import { useLensGuideActions, useLensGuideState } from '@/store';
import LensTechSelectTabs from '../Shared/LensTechSelectTabs';
import RadioTabs from '../Shared/RadioTabs';
import TechDataItem from '../Shared/TechDataItem';
import SwatchColourContainer from './SwatchColourContainer';
import useProductData from '@/utils/hooks/useProductData';
import { productData } from '@/utils/constants/apiEndpoints';
import { useEffect } from 'react';

const ProductInfo = () => {
  const { data, isLoading: sceneLoading } = useProductData(productData);
  const { currentProduct, allProducts, lensView } = useLensGuideState();
  const { setAllProducts, setCurrentProduct } = useLensGuideActions();

  useEffect(() => {
    if (data && sceneLoading !== true) {
      const allOptions = data.renegades.parts[1].options;
      setAllProducts(allOptions);

      if (!currentProduct && allOptions.length > 0) {
        setCurrentProduct(allOptions[0]);
      }
    }
  }, [
    allProducts,
    setAllProducts,
    data,
    sceneLoading,
    currentProduct,
    setCurrentProduct,
  ]);
  const standardLens =
    currentProduct?.optionTech?.displayTitle?.includes('Standard');
  const polarised = currentProduct?.optionTech?.displayTitle
    ?.toLowerCase()
    .includes('polarised');
  const material = standardLens ? 'Polycarbonate' : 'Nylon';
  const toolTipValue = `SunGod 8KO &reg; lenses are precisely engineered from 2mm ${material.toLowerCase()}. This is our original lens technology, and features a triple-layer scratch-resistant coating and certified impact protection.`;

  return (
    <div className="w-full LensGuideProduct">
      <div className="LensGuideProduct">
        {/* TODO: only visible on desktop */}
      </div>
      <div className="LensGuideModal__tabs">
        <div className="RadioTabs">
          <RadioTabs />
        </div>
      </div>
      {lensView === 'type' ? <LensTechSelectTabs /> : <SwatchColourContainer />}

      <div className="LensTechData">
        <div className="LensTechData__row ">
          {lensView === 'type' ? (
            <TechDataItem
              toolTipValue={toolTipValue}
              title="Material"
              value={material}
            />
          ) : null}
          <div className="flex justify-between">
            {lensView === 'colour' ? (
              <>
                <TechDataItem
                  toolTipValue={
                    'VLT stands for Visible Light Transmission. It measures how much light passes through a lens to reach the eye. The lower the VLT, the darker the tint of your lenses'
                  }
                  title="VLT"
                  value={`${currentProduct?.vlt}%`}
                />
                <TechDataItem
                  toolTipPosition="right-0"
                  toolTipValue={
                    'Your SunGods block 100% of UVA and UVB radiation, meeting UV400 safety standards. This mean they protect your eyes from harmful ultraviolent (UV) solar radiation'
                  }
                  title="UV Protection"
                  value={'100%'}
                />
              </>
            ) : (
              <>
                <TechDataItem
                  toolTipValue={
                    'Abbe Value is a measure of the optical clarity of a lens material. The higher the Abbe Value, the better the optical clarity of your lens.'
                  }
                  title="Abbe Value"
                  value={standardLens ? '31' : '45'}
                />
                <TechDataItem
                  toolTipPosition="right-0"
                  toolTipValue={
                    'Polarised lenses contain and invisible microfilter whcih cuts out glare. Colours appear bright and bolder and your eyes feel more relaxed.'
                  }
                  title="Polarised"
                  value={polarised ? 'No' : 'Yes'}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
