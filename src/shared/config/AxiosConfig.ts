import axios from "axios";

const notionURL = process.env.NOTION_URL as string;

const MyBlogAxiosAPI = axios.create();

MyBlogAxiosAPI.defaults.baseURL = notionURL;
