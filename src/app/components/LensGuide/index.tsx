import MainImage from './MainImage';
import ProductInfo from './ProductInfo';

const LensGuide = () => {
  return (
    <div className="LensGuideModal h-screen">
      <div className="LensGuideModal__close-container"></div>
      <div className="LensGuideModal__main-container">
        <div className="LensGuideModal__inner">
          <div className="LensGuideModal__preview-image">
            <MainImage />
          </div>
          <div className="LensGuideModal__preview-info">
            <ProductInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LensGuide;
