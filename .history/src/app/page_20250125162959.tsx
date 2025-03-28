import { connectToDatabase } from "@/lib/mongoose";

export default async function Home() {
  const connect = connectToDatabase();
  console.log("🚀 ~ Home ~ connect:", connect);
  return <div>Home Page</div>;
}
