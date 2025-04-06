
const config = {
    couponCode: process.env.REACT_APP_CUPON || "TONYPROMO2025"
  };

export function isCuponAvailable() {
  const today = new Date();
  const day = today.getDay();
  return day >= 2 && day <= 4; 
}  
  
export default config;