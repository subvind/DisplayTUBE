import { e as error } from "../../../../chunks/index.js";
function load({ params }) {
  if (params.playlistId) {
    return {
      playlistId: params.playlistId
    };
  }
  throw error(404, "Not found");
}
export {
  load
};
