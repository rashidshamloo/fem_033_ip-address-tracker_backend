// dotenv
import dotenv from "dotenv";
dotenv.config();

// API variables

// API KEY
export const API_KEYS = {
  ipify: process.env.API_KEY_IPIFY,
  ipgeolocation: process.env.API_KEY_IPGEOLOCATION,
  ip2location: process.env.API_KEY_IP2LOCATION,
  ipdata: process.env.API_KEY_IPDATA,
};

// API PROVIDER
export const API_PROVIDER: { [key: string]: string } = {
  "ip-api": "http://ip-api.com",
  ipify: "https://www.ipify.org",
  ipgeolocation: "https://ipgeolocation.io",
  ipwho: "https://ipwho.is",
  ip2location: "https://www.ip2location.io/",
  ipdata: "https://ipdata.co",
};

// API URL
export const API_URL: { [key: string]: string } = {
  "ip-api": "http://ip-api.com/json/",
  ipify:
    "https://geo.ipify.org/api/v2/country,city?apiKey=" +
    API_KEYS["ipify"] +
    "&ipAddress=",
  ipgeolocation:
    "https://api.ipgeolocation.io/ipgeo?apiKey=" +
    API_KEYS["ipgeolocation"] +
    "&ip=",
  ipwho: "https://ipwho.is/",
  ip2location:
    "https://api.ip2location.io/?key=" +
    API_KEYS["ip2location"] +
    "&format=json&ip=",
  ipdata: "https://api.ipdata.co/query/?api-key=" + API_KEYS["ipdata"],
};
