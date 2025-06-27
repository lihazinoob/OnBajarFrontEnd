export default async function fetchCategoryInformation()
{
  const response = await fetch("https://raw-node-js.onrender.com/api/uploadCategoryInformation",{
    next:{
      revalidate:30
    }
  });
  if(!response.ok)
  {
    throw new Error("Error fetching data from the backend");
  }
  const result = await response.json();
  return result.categoryInformation;

}