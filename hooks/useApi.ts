import axios from "axios";
import trending from "../assets/trending.json";
import { memes } from "../assets/list";

export interface TrendingMeme {
  title: string;
  url: string;
  created_utc: number;
}

export interface Meme {
  name: string;
  image: any;
}

export const useApi = () => {
  const getTrending = async (): Promise<TrendingMeme[]> => {
    // const result = await axios.get('https://reddit-meme.p.rapidapi.com/memes/trending',
    // {
    //   headers: {
    //     'X-RapidAPI-Key': '6c2e725583mshcda36c0eb5851c1p1b3905jsna5eb75179731',
    //     'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
    //   }
    // })
    // return result.data;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(trending);
      }, 1000);
    });
  };

  const getMemes = async (): Promise<Meme[]> => {
    return new Promise((resolve, reject) => {
      let result: Meme[] = [];

      Object.entries(memes).forEach(([key, value]) => {
        result.push({
          name: key,
          image: value,
        });
      });
      resolve(result);
    });
  };

  return {
    getTrending,
    getMemes,
  };
};
