'use client';

import { useLensGuideActions, useLensGuideState } from '@/store';
import { productData, sceneData } from '@/utils/constants/apiEndpoints';
import useProductData from '@/utils/hooks/useProductData';
import useSceneData from '@/utils/hooks/useSceneData';
import { SceneData } from '@/utils/types/SceneData';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Close from '../SVGs/Close';
import Mountains from '../SVGs/Mountains';
import PressHold from '../SVGs/PressHold';
import MountainOverlay from './MountainOverlay';

const MainImage = () => {
  const { data: scene_data, isLoading: sceneLoading } = useSceneData(sceneData);
  const { data: product_data, isLoading: productLoading } =
    useProductData(productData);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSmallImages, setShowSmallImages] = useState(false);
  const [showGlasses, setShowGlasses] = useState(false);
  const [curImage, setCurImage] = useState('');
  const [holdingActive, setHoldingActive] = useState(false);
  const [blackOverlay, setBlackOverlay] = useState(true);
  const [pressOverlay, setPressOverlay] = useState(true);

  const [nu, setNu] = useState<SceneData | undefined>();
  const shadeColour = (color: string) => {
    return `https://sg360.sungod.co/insecure/crop:2100:1500/resize:fill:1400/plain/gs://sg360/230406/Renegades/rgle_${color}_014.png`;
  };
  const frame = `https://sg360.sungod.co/insecure/crop:2100:1500/resize:fill:1400/plain/gs://sg360/230406/Renegades/rgf_Mblack_014.png`;
  const {
    showGuide,
    switcherView,
    currentProduct,
    currentSceneInfo,
    allSceneInfo,
  } = useLensGuideState();
  const {
    setSwitcherView,
    setShowGuide,
    setCurrentSceneInfo,
    setAllSceneInfo,
  } = useLensGuideActions();
  const setFilters = useCallback(() => {
    const colour = currentProduct?.name.split(' ').pop()?.toLowerCase();
    const lens = currentProduct?.optionTech?.tech;

    for (const item of allSceneInfo || []) {
      const sceneImages = item.sceneImages;

      for (const key in sceneImages) {
        const lensType = sceneImages[key].lensType;
        const lensColour = sceneImages[key].lensColour;

        if (
          lensType === lens &&
          lensColour === colour &&
          item.sceneName === nu?.sceneName &&
          scene_data &&
          product_data &&
          !sceneLoading &&
          !productLoading
        ) {
          setCurImage(sceneImages[key].image.responsiveImage.src);
        }
      }
    }
  }, [
    allSceneInfo,
    currentProduct,
    nu,
    productLoading,
    product_data,
    sceneLoading,
    scene_data,
  ]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBlackOverlay(false);
    }, 3000);
    if (scene_data && sceneLoading !== true) {
      setAllSceneInfo(scene_data);
      setFilters();
      if (
        !nu &&
        sceneData.length > 0 &&
        scene_data &&
        product_data &&
        !sceneLoading &&
        !productLoading
      ) {
        setCurrentSceneInfo(scene_data[0]);
        setNu(scene_data[0]);
      }
    }
    return () => clearTimeout(timeoutId);
  }, [
    setNu,
    currentProduct,
    setCurImage,
    setAllSceneInfo,
    setCurrentSceneInfo,
    sceneLoading,
    scene_data,
    currentSceneInfo,
    setFilters,
  ]);

  const getLens = () => {
    return shadeColour(
      currentProduct?.name.split(' ').pop()?.toLowerCase() ?? ''
    );
  };

  const handleImageClick = (index: number) => {
    const clickedScene = allSceneInfo![index];
    setSelectedImage(index);
    if (clickedScene && nu) {
      setNu(clickedScene);
      clickedScene && setCurrentSceneInfo(nu);
    }
    setShowSmallImages(false);
  };
  const handleMountainsClick = () => {
    setShowSmallImages(!showSmallImages);
  };

  const handleGlassesClick = () => {
    setShowGlasses(!showGlasses);
    setShowSmallImages(false);
    setSwitcherView('glasses');
  };

  const handleSwitch = () => {
    setSwitcherView('scene');
    setShowGlasses(!showGlasses);
  };

  const handleExit = () => {
    setShowGuide(false);
    setSwitcherView('scene');
  };

  const handleMouseDown = () => {
    setCurImage(nu?.nakedEyeImage.responsiveImage.src ?? '');
    setHoldingActive(true);
  };

  const handleMouseUp = () => {
    // Stop the function or code execution
    setHoldingActive(false);
    setFilters();
  };

  const handlePressOverlay = () => {
    setPressOverlay(false);
    handleMouseDown();
    setHoldingActive(true);
  };

  const renderBottomGlasses = () => {
    return (
      <button className="cursor-pointer bg-white relative rounded-md">
        <Image
          className="object-cover rounded-md w-full "
          width={60}
          height={60}
          // sizes="4em"
          // sizes="(max-width: 640px) 32em, (max-width: 768px) 16em, (max-width: 1024px) 8em"
          src={frame}
          alt={product_data.renegades.parts[0].options[0].name}
        />
        <Image
          className="object-cover rounded-md w-full  absolute top-0 p  "
          width={60}
          height={60}
          // sizes="4em"
          // sizes="(max-width: 640px) 32em, (max-width: 768px) 16em, (max-width: 1024px) 8em"
          src={getLens()}
          alt={product_data.renegades.parts[0].options[0].name}
        />
      </button>
    );
  };

  if (productLoading || sceneLoading) return <div>Loading...</div>;

  return (
    <div className="LensGuide__main-image flex justify-center items-center relative">
      {blackOverlay && (
        <div
          onClick={() => setBlackOverlay(false)}
          className="absolute flex-col  top-0 z-30 left-0 w-full h-full bg-black bg-opacity-70 duration-300 transition-all flex justify-between p-10 items-center text-white text-2xl"
        ></div>
      )}
      {pressOverlay && (
        <div
          onClick={() => handlePressOverlay()}
          onMouseDown={() => handlePressOverlay()}
          className="absolute flex-col  top-0 z-20 left-0 w-full h-full  duration-300 transition-all flex justify-between p-10 items-center text-white text-2xl"
        >
          <span className=" "></span>
          <span>
            <PressHold size="2x" classes="animate-bounce" />
          </span>
          <span className="text-md">Press & Hold</span>
        </div>
      )}
      <div className="LensGuide____main-image__background">
        <div className="LensGuide____main-image__background__container relative">
          {switcherView === 'scene' ? (
            <Image
              className={`object-cover w-full transition-opacity  duration-300 ${curImage ? 'opacity-100' : 'opacity-0'}`}
              height={500}
              width={500}
              key={nu?.nakedEyeImage.id}
              // sizes={nu?.nakedEyeImage.responsiveImage.sizes}
              src={curImage}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              alt={nu?.nakedEyeImage.responsiveImage.alt ?? ''}
            />
          ) : (
            <Image
              className="object-cover w-full border border-red-500"
              height={1000}
              width={1000}
              src={'/renegades-clear.png'}
              alt={'renegade lens'}
            />
          )}
          <div className="flex justify-between w-full items-center absolute bottom-0 p-4 ">
            {showGlasses ? (
              <div className="cursor-pointer" onClick={handleSwitch}>
                <Image
                  className=""
                  height={50}
                  width={50}
                  src={nu?.nakedEyeImage.responsiveImage.src ?? ''}
                  alt={nu?.nakedEyeImage.responsiveImage.alt ?? ''}
                />
              </div>
            ) : null}
            {showGlasses ? null : (
              <div
                className="LensGuide__main-image__switcher-container"
                onClick={handleGlassesClick}
              >
                {renderBottomGlasses()}
              </div>
            )}

            {!pressOverlay ? (
              <div className="LensGuide__main-image__tech-type  font-bold  ">
                {holdingActive ? (
                  <span className="text-md text-white">Naked Eye Image</span>
                ) : (
                  <span className=" text-3xl text-white uppercase shadow-2xl">
                    {currentProduct?.optionTech?.tech}
                  </span>
                )}
              </div>
            ) : null}
            {showGlasses ? null : (
              <div className="LensGuide____main-image__small-images flex items-center relative">
                <button
                  onClick={handleMountainsClick}
                  className="LensGuide____main-image__small-images__icon-container"
                >
                  {showSmallImages ? (
                    <Close
                      size="2x"
                      classes={`cursor-pointer bg-gray-200 p-3 rounded-md`}
                    />
                  ) : (
                    <Mountains
                      size="2x"
                      classes={`cursor-pointer bg-gray-200 p-3 rounded-md`}
                    />
                  )}
                </button>

                {showSmallImages && (
                  <ul className="LensGuide____main-image__small-image__list flex flex-col gap-1 bg-gray-200 p-1 absolute bottom-20 ">
                    {allSceneInfo?.map((item, i) => {
                      return (
                        <div
                          className="flex items-center justify-center w-full"
                          key={item.nakedEyeImage.id}
                        >
                          <li
                            onClick={() => {
                              handleImageClick(i);
                            }}
                            className={`LensGuide____main-image__small-images-item cursor-pointer rounded-md relative ${selectedImage === i ? 'bg-gradient-to-r from-bg-blue-500 to-purple-600' : ''} pb-1`}
                          >
                            <Image
                              height={50}
                              width={50}
                              className={``}
                              src={item.nakedEyeImage.responsiveImage.src}
                              alt={
                                item.nakedEyeImage.responsiveImage.alt ??
                                `${item.sceneName}`
                              }
                            />
                          </li>
                          {selectedImage === i && (
                            <div className="absolute flex w-full justify-center items-center">
                              <MountainOverlay />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between w-full absolute top-0 p-4 z-10">
            <span></span>
            {showGuide ? (
              <Close
                size="2x"
                onClick={handleExit}
                classes={`cursor-pointer bg-white shadow-xl px-2 py-1 rounded-full`}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
