import Profile from "@/models/Profile";
import BuyResidentialPage from "@/template/BuyResidentialPage";
import connectDB from "@/utils/connectDB";

async function BuyResidential({ searchParams }) {
  // const res = await fetch("http://localhost:3000/api/profile", {
  //   cache: "no-store",
  // });
  // const data = await res.json();
  // if (data.error) return <h3>مشکلی پیش آمده است</h3>;
  // let finalData = data.data;
  // if (searchParams.category) {
  //   finalData = finalData.filter((i) => i.category === searchParams.category);
  // }
  await connectDB()
  let profiles =await Profile.find({published:true})
  if(searchParams.category){
    profiles=profiles.filter((i)=>i.category===searchParams.category)
  }

  return (
    <div>
      <BuyResidentialPage data={profiles} />
    </div>
  );
}

export default BuyResidential;

