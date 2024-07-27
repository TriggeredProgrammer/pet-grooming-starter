import { getData, postData } from "./apiService";

// get review and slider data
export const getDashboard = async () => {
  try {
    const data = await getData("dashboard", "GET");
    return data;
  } catch (error) {
    throw error;
  }
};

// get city
export const getCities = async () => {
  try {
    const data = await getData("get_cities", "POST", { state_id: 0 });
    return data;
  } catch (error) {
    throw error;
  }
};

// get state
export const getStates = async () => {
  try {
    const data = await getData("get_state", "POST", { country_id: 1 });
    return data;
  } catch (error) {
    throw error;
  }
};

// get timeslote
export const getTimeSlotes = async (date, city_id = "", item_id = "") => {
  try {
    const data = await getData("customer/get-time-slots-v2", "POST", {
      date: date,
      city_id,
      item_id
    });
    return data;
  } catch (error) {
    throw error;
  }
};

// get booking plans / product plans
export const getProductPlans = async (body) => {
  try {
    const data = await getData("customer/products", "POST", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// add pet / save pet
export const addPet = async (body) => {
  try {
    const data = await postData("customer/save_pet", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// add personal details
export const userDetails = async (body) => {
  try {
    const data = await postData("auth/registration", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// Send Otp
export const sendOtp = async (body) => {
  try {
    const data = await postData("auth/sendOTP", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// verify otp and active account
export const activeAccount = async (body) => {
  try {
    const data = await postData("auth/activeAccount", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// loginWithOtp
export const loginWithOtp = async (body) => {
  try {
    const data = await postData("auth/login-with-otp", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// Save address
export const saveAddress = async (body) => {
  try {
    const data = await postData("customer/save_address", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// Add to cart on slot Select
export const addToCart = async (body) => {
  try {
    const data = await postData("customer/addToCartData", body);
    // const data = await postData("customer/addToCart", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// get order history
export const getCartDataForCheckout = async (body) => {
  try {
    const data = await postData("customer/checkout", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// cancel cart item
export const cancelCartItem = async (body) => {
  try {
    const data = await postData("customer/deleteCart", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// get adress
export const getAddress = async () => {
  try {
    const data = await getData("customer/get_addresses", "GET");
    return data;
  } catch (error) {
    throw error;
  }
};

// get coupons
export const getCoupons = async (body) => {
  try {
    const data = await postData("customer/coupons", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// place order
export const placeOrder = async (body) => {
  try {
    const data = await postData("customer/place_order-web", body);
    // const data = await postData("customer/place_order", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// get pet breed list
export const getBreedList = async () => {
  try {
    const data = await postData("breed-list");
    return data;
  } catch (error) {
    throw error;
  }
};

// get Profile
export const getProfile = async () => {
  try {
    const data = await getData("customer/get_myProfile", "GET");
    return data;
  } catch (error) {
    throw error;
  }
};

// update userProfile
export const updateProfile = async (body) => {
  try {
    const data = await postData("customer/updateProfile", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// get city
export const getServiceDetails = async (id, cityId) => {
  try {
    const url = `customer/product/${id}/${cityId}`;
    const data = await getData(url, "GET");
    return data;
  } catch (error) {
    throw error;
  }
};

export const PurchaseHistory = async (body) => {
  try {
    const data = await postData("customer/purchase-history", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// get order by id
export const getOrderById = async (id) => {
  try {
    const url = `customer/order/${id}`;
    const data = await getData(url, "GET");
    return data;
  } catch (error) {
    throw error;
  }
};

// cancel order
export const CancelOrder = async (body) => {
  try {
    const data = await postData("customer/cancel-order", body);
    return data;
  } catch (error) {
    throw error;
  }
};


// get adress
export const getMyPets = async () => {
  try {
    const data = await postData("customer/my-pets");
    return data;
  } catch (error) {
    throw error;
  }
};

// delete pet
export const Deletepet = async (body) => {
  try {
    const data = await postData("customer/delete_pet", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// reschadule order
export const ReschaduleOrder = async (body) => {
  try {
    const data = await postData("customer/order-reschedule", body);
    return data;
  } catch (error) {
    throw error;
  }
};

// placeOrder test
export const placeOrderTest = async (body) => {
  try {
    const data = await postData("customer/place_order-web-test", body);
    // const data = await postData("customer/place_order", body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const saveNewsLetter = async(body) =>{
  try{
    const data = await postData("save-newsletter", body);
    return data;
  } catch (error){
    throw error;
  }
}

export const getBlogs = async (page, perPage = 5) => {
  try {
      const url = `blogs?page=${page}&per_page=${perPage}`;
      const data = await getData(url);
      return data;
  } catch (error) {
      throw error;
  }
}

export const getSingleBlog = async(slug) => {
  try{
    const data = await getData(`blogs/${slug}`);
    return data;
  }catch(error){
    throw error;
  }
}

export const getTagList = async() => {
  try{
    const data = await getData('top-tags');
    return data;
  }catch(error){
    throw error;
  }
}

export const getTopBlogs = async () => {
  try{
    const data = await getData('top-blogs');
    return data;
  }catch(error){
    throw error;
  }
}