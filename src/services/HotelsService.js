import Service from './Service';

class HotelsService {

  async getHotels(filters) {
    let hotelsUrl = 'hotels';
    filters.stars = Array.from(filters.stars);
      let hotels = await Service.sendRequest(hotelsUrl, filters, {
      method: 'GET'
    });
    return hotels;
  }

}

let hotelsService = new HotelsService();
export default hotelsService;
