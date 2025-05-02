import { commonClassName } from "@/constants";
import { cn } from "@/lib/utils";
interface GenericStatusBadgeProps {
  status: string;
  statusList: {
    value?: string;
    title?: string;
    className?: string;
  }[];
  as?: "button" | "span";
}
const StatusBadge = ({
  status,
  statusList,
  onClick,
  as = "span",
}: GenericStatusBadgeProps) => {
  const statusObj = statusList.find((item) => item.value === status);
  return (
    <span className={cn(commonClassName.status, statusObj?.className)}>
      {statusObj?.title || "Không xác định"}
    </span>
  );
};

export default StatusBadge;
