import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
  return (
    <div>

    {
      session?.user &&
       <>
       <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
        <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.email}</h1>
        <Image src={session?.user?.image} height={400} width={400} alt="user image"/>
       </>
    }

    <h1>User Pending</h1>
    </div>
  );
};

export default DashboardPage;
