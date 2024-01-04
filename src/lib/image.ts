/**
 * 返回图片尺寸
 */
export const calculateDimensions = ({
  width,
  height,
  max
}: {
  width: number
  height: number
  max: { width: number; height: number }
}) => {
  if (width === 0 || height === 0) throw new Error('Invalid image size')

  const { width: maxW, height: maxH } = max

  const wRatio = maxW / width || 1
  const hRatio = maxH / height || 1

  const ratio = Math.min(wRatio, hRatio, 1)

  return {
    width: width * ratio,
    height: height * ratio
  }
}

/**
 * 返回图片主色调
 */
export function getDominantColor(imageObject: HTMLImageElement) {
  const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d')!

  canvas.width = 1
  canvas.height = 1

  // 将图像绘制到一个像素，让浏览器找到主色
  ctx.drawImage(imageObject, 0, 0, 1, 1)

  // 获取像素颜色
  const i = ctx.getImageData(0, 0, 1, 1).data

  return `#${((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1)}`
}

/**
 * 压缩图片, 返回 base64
 */
export const compressImage = ({
  img,
  type = 'image/webp'
}: {
  img: HTMLImageElement
  type?: string
}) => {
  // 设置最大宽高
  const maxWidth = 2160
  const maxHeight = 2160
  let width = img.width
  let height = img.height

  if (width > height && width > maxWidth) {
    // 如果图片宽度大于高度且大于最大宽度限制
    width = maxWidth
    height = Math.round((maxWidth / img.width) * img.height)
  } else if (height > width && height > maxHeight) {
    // 如果图片高度大于宽度且大于最大高度限制
    height = maxHeight
    width = Math.round((maxHeight / img.height) * img.width)
  }

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = width
  canvas.height = height

  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height)

  return canvas.toDataURL(type)
}

/**
 * 图片转 base64
 */
export const imageToBase64 = ({
  size,
  img,
  type = 'image/webp'
}: {
  img: HTMLImageElement
  size: number
  type?: string
}) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  let startX = 0
  let startY = 0

  if (img.width > img.height) {
    startX = (img.width - img.height) / 2
  } else {
    startY = (img.height - img.width) / 2
  }

  canvas.width = size
  canvas.height = size

  ctx.drawImage(
    img,
    startX,
    startY,
    Math.min(img.width, img.height),
    Math.min(img.width, img.height),
    0,
    0,
    size,
    size
  )

  return canvas.toDataURL(type)
}
