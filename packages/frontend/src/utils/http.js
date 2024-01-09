import { request } from 'common'
const blankCb = () => {}

export function getConfig() {
  return request({
    method: 'GET',
    url: '/config'
  }).catch(blankCb)
}

export function getComics() {
  return request({
    method: 'GET',
    url: '/comics'
  }).catch(blankCb)
}
export function getComic(id) {
  return request({
    method: 'GET',
    url: `/comics/${id}`
  }).catch(blankCb)
}

export function login(data) {
  return request(
    {
      method: 'POST',
      url: '/login',
      data: data
    },
    {
      useCache: false,
      useThrottle: false
    }
  ).catch(blankCb)
}

export function register(data) {
  return request(
    {
      method: 'POST',
      url: '/register',
      data: data
    },
    {
      useCache: false,
      useThrottle: false
    }
  ).catch(blankCb)
}

export function getComicChapter(id, chapter) {
  return request({
    method: 'GET',
    url: `/comics/${id}/${chapter}`
  }).catch(blankCb)
}

export function getHistoryComics(ids) {
  if (!ids) {
    return
  }
  const query = ids.map((id) => `id=${id}`).join(`&`)

  return request(
    {
      method: 'GET',
      url: `/history?${query}`
    },
    {
      useCache: false
    }
  ).catch(blankCb)
}

export function getProfile(token) {
  return request(
    {
      method: 'POST',
      url: '/profile',
      data: token
    },
    {
      useCache: false
    }
  ).catch(blankCb)
}

export function postFavorite(data) {
  return request(
    {
      method: 'POST',
      url: '/favorite',
      data: data
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 3000
    }
  ).catch(blankCb)
}

export function deleteFavorite(id) {
  return request(
    {
      method: 'DELETE',
      url: `/favorites/${id}`
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 3000
    }
  ).catch(blankCb)
}

export function getFavoriteComics() {
  return request(
    {
      method: 'GET',
      url: '/favorites'
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 1000
    }
  ).catch(blankCb)
}

export function getFavorite(id) {
  return request(
    {
      method: 'GET',
      url: `/favorites/${id}`
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 1000
    }
  ).catch(blankCb)
}

export function postAvatar(data) {
  return request({
    method: 'POST',
    url: `/profile/avatar`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).catch(blankCb)
}

export function getSearch(keyword) {
  if (!keyword) {
    return
  }
  const query = `keyword=${keyword}`
  return request(
    {
      method: 'GET',
      url: `/search?${query}`
    },
    {
      useCache: true,
      useThrottle: false
    }
  ).catch(blankCb)
}

export function getComicComments(id) {
  return request(
    {
      method: 'GET',
      url: `comics/${id}/comments`
    },
    {
      useCache: false,
      useThrottle: false
    }
  ).catch(blankCb)
}

export function postComicComment({ id, content }) {
  return request(
    {
      method: 'POST',
      url: `/comics/${id}/comments`,
      data: { content }
    },
    {
      useCache: false,
      useThrottle: false
    }
  ).catch(blankCb)
}
