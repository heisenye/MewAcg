import request from './request'
const blankCb = () => {}

export function getComics() {
  return request({
    method: 'GET',
    url: '/comics'
  })
    .catch(blankCb)
}
export function getComic(id) {
  return request({
    method: 'GET',
    url: `/comics/${id}`
  })
    .catch(() => {})
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
      useThrottle: true,
      throttleTime: 3000
    }
  )
    .catch(() => {})
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
      useThrottle: true,
      throttleTime: 3000
    }
  )
    .catch(() => {})
}

export function getComicChapter(id, chapter) {
  return request(
    {
      method: 'GET',
      url: `/comics/${id}/${chapter}`
    },
  )
    .catch(blankCb)
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
  )
    .catch(() => {})
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
  )
    .catch(() => {})
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
  )
    .catch(() => {})
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
  )
    .catch(() => {})
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
  )
    .catch(() => {})
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
  )
    .catch(() => {})
}

export function postAvatar(data) {
  return request(
    {
      method: 'POST',
      url: `/profile/avatar`,
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
  )
    .catch(() => {})
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
      useCache: false,
      useThrottle: true,
      throttleTime: 0
    }
  )
    .catch(() => {})
}

export function postComic(data) {
  return request(
    {
      method: 'POST',
      url: `/comic`,
      data: data
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 0
    }
  )
    .catch(() => {})
}

export function patchComic({id,field, newVal}) {
  return request(
    {
      method: 'PATCH',
      url: `/comic/${id}`,
      data: {field, newVal}
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 0
    }
  )
    .catch(() => {})
}

export function postComicChapter({ id, chapter, formData}) {
  return request(
    {
      method: "POST",
      url: `/comics/${id}/${chapter}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 10000
    }
  )
    .catch(() => {})
}

export function removeComicChapter(id, chapter) {
  return request(
    {
      method: "DELETE",
      url: `/comics/${id}/${chapter}`
    },
    {
      useCache: false,
      useThrottle: true,
      throttleTime: 10000
    }
  )
    .catch(() => {})
}

export function putComicCoverImage({id, chapter, page}) {
  return request(
      {
      method: "PUT",
      url: `/comics/${id}/cover`,
      data: {
        chapter: chapter,
        page: page
      }
    }
  ).catch(() => {})
}