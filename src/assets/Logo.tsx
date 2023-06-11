type logoProps = {
  color: string;
  fontSize: string;
};

const Logo = ({ color, fontSize }: logoProps) => {
  const style: React.CSSProperties = {
    color,
    fontSize,
    fontFamily: "'Ubuntu', sans-serif;",
  };
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
      </style>
      <span style={style}>J</span>
      <span style={style}>R</span>
    </div>
  );
};

export default Logo;
