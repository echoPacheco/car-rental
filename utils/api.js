import axios from "axios";

const infoCarsBaseURL = "https://api.api-ninjas.com/v1/cars";

export async function fetchCars(filters) {
  const { manufacturer, year, model, fuel_type } = filters;

  const headers = {
    "X-API-Key": process.env.VUE_APP_RAPID_API_KEY || ""
  };
  try {
    const response = await axios.get(`${infoCarsBaseURL}`, {
      params: {
        make: manufacturer,
        year: year,
        model: model,
        fuel_type: fuel_type,
      },
      headers: headers, 
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}

export const generateCarImageUrl = (manufacturer, model, year) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append(
    "customer",
    process.env.VUE_APP_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", manufacturer);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
