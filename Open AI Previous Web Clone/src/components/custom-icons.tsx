import cn from "clsx";

type Props = {
  iconName: string;
  className?: string;
};

const Icons = {
  arrow,
  dropDownArrow,
  pause,
  play,
};

type IconName = keyof typeof Icons;

type CustomIconProps = Props & {
  iconName: IconName;
};

export default function CustomIcon({
  iconName,
  className,
}: Props): JSX.Element {
  const Icon = Icons[iconName];

  return <Icon className={className} />;
}

function arrow({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={cn(className, "")}
      aria-hidden="true"
      height="1em"
      width="1em"
    >
      <polygon
        fill="currentColor"
        points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31"
      ></polygon>
    </svg>
  );
}

function dropDownArrow({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={cn(className, "h-[1em] w-[1em]")}
      aria-hidden="true"
    >
      <polygon
        fill="currentColor"
        points="8 10.98 3.51 6.49 4.49 5.51 8 9.02 11.51 5.51 12.49 6.49 8 10.98"
      ></polygon>
    </svg>
  );
}

function pause({ className }: Props) {
  return (
    <svg
      data-v-67d7128c=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={cn(className, "h-[1em] w-[1em]")}
      data-new=""
    >
      <g data-v-67d7128c="" fill="currentColor">
        <rect x="9.81" y="2" width="1.38" height="12"></rect>
        <rect x="4.81" y="2" width="1.38" height="12"></rect>
      </g>
    </svg>
  );
}

function play({ className }: Props) {
  return (
    <svg
      data-v-67d7128c=""
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={cn(className, "h-[1em] w-[1em]")}
      data-new=""
    >
      <polygon
        data-v-67d7128c=""
        fill="currentColor"
        points="2 2 14 8 2 14 2 2"
      ></polygon>
    </svg>
  );
}
