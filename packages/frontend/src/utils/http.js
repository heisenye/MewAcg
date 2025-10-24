import { request } from 'common'

const errorHandler = (error) => {
  if (import.meta.env.DEV) {
    console.error(error)
  }
}

export function getConfig() {
  return request({
    method: 'GET',
    url: '/config'
  }).catch(errorHandler)
}

export function getComics() {
  return request({
    method: 'GET',
    url: '/comics'
  }).catch(errorHandler)
}

export function getPopularComics() {
  return request({
    method: 'GET',
    url: '/comics/popular'
  }).catch(errorHandler)
}
export function getComic(id) {
  return request({
    method: 'GET',
    url: `/comics/${id}`
  }).catch(errorHandler)
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
  ).catch(errorHandler)
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
  ).catch(errorHandler)
}

export function getComicChapter(id, chapter) {
  return request({
    method: 'GET',
    url: `/comics/${id}/${chapter}`
  }).catch(errorHandler)
}

export function getHistoryComics(ids) {
  if (ids.length === 0) return
  const query = ids.map((id) => `id=${id}`).join(`&`)

  return request(
    {
      method: 'GET',
      url: `/history?${query}`
    },
    {
      useCache: false
    }
  ).catch(errorHandler)
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
  ).catch(errorHandler)
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
  ).catch(errorHandler)
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
  ).catch(errorHandler)
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
  ).catch(errorHandler)
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
  ).catch(errorHandler)
}

export function postAvatar(data) {
  return request({
    method: 'POST',
    url: `/profile/avatar`,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).catch(errorHandler)
}

export function getSearch(keyword, type = 'name') {
  if (!keyword) return
  let query

  if (type === 'tag') query = `tag=${keyword}`
  else if (type === 'author') query = `author=${keyword}`
  else query = `name=${keyword}`

  return request(
    {
      method: 'GET',
      url: `/search?${query}`
    },
    {
      useCache: true,
      useThrottle: false
    }
  ).catch(errorHandler)
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
  ).catch(errorHandler)
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
  ).catch(errorHandler)
}

export function postView(id, date) {
  return request(
    {
      method: 'POST',
      url: `/comics/${id}/view`,
      data: { date }
    },
    {
      useCache: false,
      useThrottle: false
    }
  ).catch(errorHandler)
}
