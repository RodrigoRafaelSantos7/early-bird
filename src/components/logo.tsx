import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 100;

const Logo = ({ className, width, height }: LogoProps) => (
  <Image
    alt="Blueprint Logo"
    className={className}
    height={height ?? DEFAULT_HEIGHT}
    src={`https://cdn.blueprint-academy.com/TPB002/icon-white.png`}
    width={width ?? DEFAULT_WIDTH}
  />
);

export { Logo };
