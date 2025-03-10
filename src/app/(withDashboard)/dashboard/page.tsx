import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session = await getServerSession(authOptions)
  return (
    <div>

    {
      session?.user ?
       <>
       <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.name}</h1>
        <h1 className="text-4xl text-center mt-10">Welcome To {session?.user?.email}</h1>
        <Image className="rounded-full mx-auto my-10 border-2 border-emerald-700"  src={session?.user?.image} height={100} width={100} alt="user image"/>
       </>:
       <h1 className="text-center mt-20 text-3xl">Next Authentication</h1>
    }

   
    </div>
  );
};

export default DashboardPage;
