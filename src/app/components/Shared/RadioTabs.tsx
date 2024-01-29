import { useLensGuideActions, useLensGuideState } from '@/store';

const RadioTabs = () => {
  const { lensView } = useLensGuideState();
  const { setLensView } = useLensGuideActions();
  return (
    <div className="RadioTabs__row__container p-6 ">
      <div
        className={`RadioTabs__row__container__tabs__hold text-center flex justify-around
      items-center w-full   rounded-md bg-slate-100  font-bold text-gray-500 p-1`}
      >
        <div
          className={`p-3 w-full transition-all duration- translate-x-0  cursor-pointer ${lensView === 'type' ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-md' : ''}
        `}
          onClick={() => setLensView('type')}
        >
          <button className="">
            <span className={` uppercase font-medium `}>Lens Type</span>
          </button>
        </div>
        <div
          className={`p-3 w-full
          uppercase
          cursor-pointer
          transition-all duration- translate-x-0
          ${lensView === 'colour' ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-md' : ''} `}
          onClick={() => setLensView('colour')}
        >
          <button>
            <span className={` uppercase font-medium   `}>Lens Colour</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadioTabs;
