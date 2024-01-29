import { SVGProps } from '@/utils/types/Components';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MountainProps extends SVGProps {}

const Mountains = ({ classes, size, onClick }: MountainProps) => {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      className={`${classes}`}
      size={size}
      icon={faHandPointer}
    />
  );
};

export default Mountains;
