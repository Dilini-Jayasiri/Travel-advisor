import axios from 'axios';



const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async (sw,ne) => {
    try {
       const {data: {data } } = await axios.get(URL, {
        //bt -> bottom right
        //tr -> top
        params: {
        bl_latitude:sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': 'd3f9e794a3mshdb4f54fcfc0e4d5p1f4575jsnae1f78834626'
        }
      });

       return data;

    } catch(error){
        console.log(error);
    }
}