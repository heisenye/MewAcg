import Router = require('@koa/router')
const router = new Router({ prefix: '/api' })
import comicController from '../controller/comic.controller'
import Middleware from '../utils/middleware'
import multer = require('@koa/multer')
const upload = multer()

router.get('/comics', comicController.getComics)
router.get('/comics/popular', comicController.getPopularComics)
router.post('/comic', comicController.createComic)
router.get('/comics/:id', Middleware.validateObjectId, comicController.getComic)
router.patch('/comic/:id', Middleware.validateObjectId, comicController.updateComic)
router.delete('/comics/:id', Middleware.validateObjectId, comicController.removeComic)
router.get(
  '/comics/:id/:chapter(\\d+)',
  Middleware.validateObjectId,
  Middleware.validateChapter,
  comicController.getComicImages
)
router.post(
  '/comics/:id/:chapter(\\d+)',
  Middleware.validateObjectId,
  Middleware.validateChapter,
  upload.array('images'),
  comicController.createComicChapter
)
router.delete(
  '/comics/:id/:chapter(\\d+)',
  Middleware.validateObjectId,
  Middleware.validateChapter,
  comicController.removeComicChapter
)
router.get('/history', comicController.getHistoryComics)
router.post('/favorite', Middleware.auth, comicController.createFavoriteComic)
router.delete(
  '/favorites/:id',
  Middleware.auth,
  Middleware.validateObjectId,
  comicController.deleteFavoriteComic
)
router.get('/favorites', Middleware.auth, comicController.getFavoriteComics)
router.get(
  '/favorites/:id',
  Middleware.auth,
  Middleware.validateObjectId,
  comicController.getFavoriteComic
)
router.get('/search', comicController.getSearchComics)

router.put('/comics/:id/cover', Middleware.validateObjectId, comicController.setComicCover)
router.get('/comics/:id/comments', Middleware.validateObjectId, comicController.getComicComments)
router.post(
  '/comics/:id/comments',
  Middleware.auth,
  Middleware.validateObjectId,
  comicController.createComicComment
)
router.post(
  '/comics/:id/view',
  Middleware.auth,
  Middleware.validateObjectId,
  comicController.createView
)

export default router
