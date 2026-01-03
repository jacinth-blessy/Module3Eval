const KEY = "evalData";

export const getRestaurants = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const savedRestaurants = (data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
};