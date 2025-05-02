import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
export const createOrderCode = () =>
  `ĐH-${new Date().getTime().toString().slice(-6)}`;
export { manrope };
