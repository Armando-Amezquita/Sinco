import './Mask.scss';

interface Props {
  className?: string;
}

export const Mask: React.FC<Props> = ({ className }) => {
  return (
    <div className={`mask ${className || ''}`}></div>
  );
};