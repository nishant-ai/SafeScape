import instance from "./config";

const locationApi = {
  getLocations: async () => {
    try {
      const response = await instance.get("/location/all");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  addLocations: async (data) => {
    try {
        const response = await instance.post('/location/add-location', data);
        return response.data;
        } catch (err) {
            console.log("Error in adding locations", err);
            }
  }
};
export default locationApi;
