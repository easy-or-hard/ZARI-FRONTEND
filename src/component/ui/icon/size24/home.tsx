type Props = {
  color?: string;
};
export default function HomeIcon({ color = "white" }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11.952C2 10.9138 2.40363 9.91629 3.12559 9.17027L9.12559 2.97027C10.6976 1.34585 13.3024 1.34585 14.8744 2.97027L20.8744 9.17027C21.5964 9.91629 22 10.9138 22 11.952V18C22 20.2092 20.2091 22 18 22H6C3.79086 22 2 20.2092 2 18V11.952ZM20 11.952V18C20 19.1046 19.1046 20 18 20H13V15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V20H6C4.89543 20 4 19.1046 4 18V11.952C4 11.4329 4.20182 10.9341 4.5628 10.5611L10.5628 4.36111C11.3488 3.5489 12.6512 3.5489 13.4372 4.36111L19.4372 10.5611C19.7982 10.9341 20 11.4329 20 11.952Z"
        fill={color}
      />
    </svg>
  );
}