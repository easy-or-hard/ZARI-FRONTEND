import IconButton, {
  IconProps,
} from "@/app/component/ui/button/icon/icon.button";
import CloseIcon from "@/app/component/ui/icon/size24/close";

type CloseProps = Omit<IconProps, "children"> & {
  onClick?: () => void;
};

/**
 * @description 아이콘이 들어간 닫기 버튼
 * @param {Props} props
 * @constructor
 */
export default function CloseButton(props: CloseProps) {
  return (
    <IconButton {...props}>
      <CloseIcon />
    </IconButton>
  );
}
