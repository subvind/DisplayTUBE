import { e as error } from "../../../../../chunks/index.js";
function load({ params }) {
  if (params.videoId || params.playlistId) {
    return {
      playlistId: params.playlistId,
      videoId: params.videoId
    };
  }
  throw error(404, "Not found");
}
export {
  load
};
