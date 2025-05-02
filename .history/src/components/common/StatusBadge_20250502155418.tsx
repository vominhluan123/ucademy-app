const StatusBadge = () => {
  return (
    <span
      className={cn(
        commonClassName.status,
        orderStatus.find((item) => item.value === orders.status)?.className
      )}
    >
      {orderStatus.find((item) => item.value === orders.status)?.title}
    </span>
  );
};

export default StatusBadge;
