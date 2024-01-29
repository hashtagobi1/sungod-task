import { SVGProps } from '@/utils/types/Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface CloseProps extends SVGProps {}

const Close = ({ classes, size, onClick }: CloseProps) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      className={`${classes}`}
      size={size}
      icon={faClose}
    />
  );
};

export default Close;
