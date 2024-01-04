const videoExts = ['mp4', 'webm', 'ogg', 'avi', 'mov', 'flv', 'wmv', 'mkv']

/**
 * 用于判断一个给定的文件扩展名是否属于视频文件。如果是视频文件的扩展名，返回 true，否则返回 false
 */
export const isVideoExt = (ext: string) => {
  return videoExts.includes(ext)
}
