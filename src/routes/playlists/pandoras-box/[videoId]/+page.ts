import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.videoId) {
    return {
      videoId: params.videoId
    };
  }
  
  throw error(404, 'Not found');
}