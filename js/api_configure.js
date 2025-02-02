/**
 * @copyright solatpukhtunyar 2025
 * @author solat <solatpukhtunyar123@gmail.com>
 * @creditsTo sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * Import
 */
import { urlEncode } from "./utils/urlEncode.js";

// ! [Do not share API Key in Public]
const /** {String} */ API_KEY =
    "OFxf2hWHNKxzLwKUXkBn4tnPQIPzbhEhDQeWhf8z0Acywsosh04jhD4V";

const /** {Function} */ headers = new Headers();
headers.append("Authorization", API_KEY);

const /** {Object} */ requestOptions = { headers };

/**
 * Fetch Data from Pexels
 * @param {String} url Fetch Url
 * @param {Function} successCallBack Success Call Back Function
 */

const fetchData = async function (url, successCallBack) {
  const /** {Object} */ response = await fetch(url, requestOptions);

  if (response.ok) {
    const /** {Object} */ data = await response.json();
    successCallBack(data);
  }
};

let /** {String} */ requestUrl = "";

const /** {Object} */ root = {
    default: "https://api.pexels.com/v1/",
    videos: "https://api.pexels.com/videos/",
  };

export const /** {Object} */ client = {
    photos: {
      /**
       * Search Photos
       * @param {Object} parameters Url Object
       * @param {Function} callback Callback Function
       */
      search(parameters, callback) {
        requestUrl = `${root.default}search?${urlEncode(parameters)}`;
        fetchData(requestUrl, callback);
      },
      /**
       * Curated Photos
       * @param {Object} parameters Url Object
       * @param {Function} callback Callback Function
       */
      curated(parameters, callback) {
        fetchData(`${root.default}curated?${urlEncode(parameters)}`, callback);
      },
      /**
       * Get Single Photo detail
       * @param {String} id Photo ID
       * @param {Function} callback Callback Function
       */
      detail(id, callback) {
        fetchData(`${root.default}photos/${id}`, callback);
      },
    },

    videos: {
      /**
       * Search Photots
       * @param {Object} parameters Url Object
       * @param {Function} callback Callback Function
       */
      search(parameters, callback) {
        requestUrl = `${root.videos}search?${urlEncode(parameters)}`;
        fetchData(requestUrl, callback);
      },
      /**
       * Get Popular videos
       * @param {Object} parameters Url Object
       * @param {Function} callback Callback Function
       */
      popular(parameters, callback) {
        fetchData(`${root.videos}popular?${urlEncode(parameters)}`, callback);
      },
      /**
       * Get Single Video detail
       * @param {String} id Video ID
       * @param {Function} callback Callback Function
       */
      detail(id, callback) {
        fetchData(`${root.videos}videos/${id}`, callback);
      },
    },

    collections: {
      /**
       * Get Featured collections
       * @param {Object} parameters Url Object
       * @param {Function} callback Callback Function
       */
      featured(parameters, callback) {
        requestUrl = `${root.default}collections/featured?${urlEncode(
          parameters
        )}`;
        fetchData(requestUrl, callback);
      },
      /**
       * Get a Collection Media
       * @param {String} id Collection ID
       * @param {Object} parameters Url Object
       * @param {Function} callback Callback Function
       */
      detail(id, parameters, callback) {
        requestUrl = `${root.default}collections/${id}?${urlEncode(
          parameters
        )}`;
        fetchData(requestUrl, callback);
      },
    },
  };
