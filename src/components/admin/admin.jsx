import Image from "next/image";
import { logos } from "../../../public/logo/logo";
import DashBoard from "./Dashboard";
import BlogsTable from "./BlogsTable";

const AdminPage = () => {
  return (
    <div className=" mx-[150px] my-[30px]">
      <div className="flex gap-10">
        <DashBoard
          value={18}
          name={"Total Blogs"}
          logo={"Blog"}
          color="bg-[#db2777]"
        />
        <DashBoard
          value={109}
          name={"Total Views"}
          logo={"View"}
          color="bg-[#ca8a04]"
        />
        <DashBoard
          value={4}
          name={"Total Messages"}
          logo={"Mail"}
          color="bg-[#2563eb]"
        />
      </div>

      <BlogsTable /> 
    </div>
  );
};

export default AdminPage;
