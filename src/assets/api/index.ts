import $http from './http';
export const API = {
  liveAll: (data?: object) => $http('get', '/app/live-all', data), //全部直播(v2)
};
