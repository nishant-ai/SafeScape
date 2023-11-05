import instance from "./config";

const crimeAPI = {
  getCrimeData: async ({ District, State }) => {
    const response = await instance.get(
      `/crime/getlocation/District=${District}&State=${State}`
    );
    return await response.json();
  },
};

export default crimeAPI;
