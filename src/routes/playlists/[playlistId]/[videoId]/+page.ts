import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.videoId || params.playlistId) {
    return {
      playlistId: params.playlistId,
      videoId: params.videoId
    };
  }
  
  throw error(404, 'Not found');
}