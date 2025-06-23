export default async function fetchBannerImage()
{
  // fetching the image URL from the backend
  const response = await fetch("http://localhost:3000/api/fetchBannerImage",{
    next:{
      revalidate:86400
    }
  });
  // converting the response in usable json format
  const result = await response.json();

  if(!response.ok)
  {
    throw new Error("Error fetching data from the backend");
  }
  return result.data.imageURL;
}