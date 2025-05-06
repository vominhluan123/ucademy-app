import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
export const createOrderCode = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `DH-${timestamp}${random}`;
};
export { manrope };
