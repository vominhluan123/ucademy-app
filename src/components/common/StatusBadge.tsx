import { commonClassName } from "@/constants";
import { cn } from "@/lib/utils";
interface GenericStatusBadgeProps {
  status: string;
  statusList: {
    value?: string;
    title?: string;
    className?: string;
  }[];
  onClick?: () => void;
  as?: "button" | "span";
}
const StatusBadge = ({
  status,
  statusList,
  onClick,
  as = "span",
}: GenericStatusBadgeProps) => {
  const statusObj = statusList.find((item) => item.value === status);
  const Tag = as;
  return (
    <Tag
      className={cn(commonClassName.status, statusObj?.className)}
      onClick={onClick}
      type={as === "button" ? "button" : undefined}
    >
      {statusObj?.title || "Không xác định"}
    </Tag>
  );
};

export default StatusBadge;
