import { useEffect, useRef, useState } from 'react';
import Close from '../SVGs/Close';

type TechDataItemProps = {
  title?: string;
  value?: string;
  toolTipValue: string;
  toolTipPosition?: string;
};

const TechDataItem = ({
  title,
  toolTipValue,
  toolTipPosition,
  value,
}: TechDataItemProps) => {
  const [active, setActive] = useState(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [blackOverlay, setBlackOverlay] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setActive(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="LensTechData__item p-7">
      {blackOverlay && (
        <div
          onClick={() => setBlackOverlay(false)}
          className="absolute flex-col  top-0 z-30 left-0 w-full h-full bg-black bg-opacity-70 duration-300 transition-all flex justify-between p-10 items-center text-white text-2xl"
        ></div>
      )}
      <div className="ToolTip flex mb-1  items-center gap-2">
        <div className="LensTechData__item__title font-light text-sm text-gray-500">
          {title}
        </div>
        <div ref={tooltipRef} className="ToolTip__icon relative">
          <span
            onClick={() => setActive(!active)}
            className="ToolTip_text cursor-pointer bg-blue-500 py-0 px-1 text-xs flex   transition-all duration-300 hover:bg-purple-900 rounded-full text-white"
          >
            ?
          </span>
          {active && (
            <>
              <div
                className={`flex w-96 absolute font-light text-sm rounded-md ${toolTipPosition} bottom-0 mb-7 duration-300 transition-all  p-3 bg-gray-200 text-black`}
              >
                {toolTipValue}
                <span>
                  <Close
                    classes="cursor-pointer"
                    onClick={() => setActive(false)}
                  />
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="LensTechData__item__value text-4xl font-bold">
        {value}
      </div>
    </div>
  );
};

export default TechDataItem;
