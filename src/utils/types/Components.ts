import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export type SVGProps = {
  classes?: string;
  size?: SizeProp;
  onClick?: () => void;
};

export type TechTitles = {
  displayTitle?: string;
  displaySubtitle?: string;
};
