import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.playlistId) {
    return {
      playlistId: params.playlistId
    };
  }
  
  throw error(404, 'Not found');
}