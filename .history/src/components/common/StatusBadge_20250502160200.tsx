import { commonClassName } from "@/constants";
import { cn } from "@/lib/utils";
interface GenericStatusBadgeProps {
  status: string;
}
const StatusBadge = ({ status, statusList }: GenericStatusBadgeProps) => {
  const statusObj = statusList.find((item) => item.value === status);
  return (
    <span className={cn(commonClassName.status, statusObj?.className)}>
      {statusObj?.title || "Không xác định"}
    </span>
  );
};

export default StatusBadge;
