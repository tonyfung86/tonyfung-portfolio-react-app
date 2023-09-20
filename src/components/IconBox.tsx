interface Props {
  icon: string;
  alt: string;
}

const IconBox = ({ icon, alt }: Props) => {
  return (
    <div className="iconBox text-center">
      <img src={icon} alt={alt} />
    </div>
  );
};

export default IconBox;
