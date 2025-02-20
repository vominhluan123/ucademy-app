import {
  IconExlore,
  IconPlay,
  IconComment,
  IconOrder,
  IconStudy,
  IconUser,
} from "@/components/icons";

import { TMenueItem } from "@/types";
import { ECourseLevel, ECourseStatus } from "@/types/enum";

export const MenuIcons: TMenueItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconExlore className="size-5" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khoá học",
    icon: <IconStudy className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUser className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];
export const courseStatus: {
  title: string;
  value: ECourseStatus;
}[] = [
  {
    title: "Đã duyệt",
    value: ECourseStatus.APPROVED,
  },
  {
    title: "Chờ duyệt",
    value: ECourseStatus.PENDING,
  },
  {
    title: "Từ chối",
    value: ECourseStatus.REJECTED,
  },
];

export const courseLevel: {
  title: string;
  value: ECourseLevel;
  className?: string;
}[] = [
  {
    title: "Dễ",
    value: ECourseLevel.BEGINNER,
    className: "text-green-500",
  },
  {
    title: "Trung bình",
    value: ECourseLevel.INTERMEDIATE,
  },
  {
    title: "Khó",
    value: ECourseLevel.ADVANCED,
  },
];
export const courseLevelTitele: Record<ECourseLevel, string> = {
  [ECourseLevel.BEGINNER]: "Dễ",
  [ECourseLevel.INTERMEDIATE]: "Trung bình",
  [ECourseLevel.ADVANCED]: "Khó",
};
