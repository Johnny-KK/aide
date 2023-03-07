const MINIO_BUCKET_NAME = 'aide-test'
const MINIO_PROXY_PATH = 'minio'

// 查询索引文件信息
function fetchIndex(): Promise<string> {
  return fetch(`/${MINIO_PROXY_PATH}/${MINIO_BUCKET_NAME}/index`).then(res => res.text())
}

function fetchFile(filename: string) {
  return fetch(`/${MINIO_PROXY_PATH}/${MINIO_BUCKET_NAME}/${filename}`).then(res => res.text())
}

// 新增、更新文件内容
function putFile(filename: string, content: string) {
  return fetch(`/${MINIO_PROXY_PATH}/${MINIO_BUCKET_NAME}/${filename}`, {
    method: 'PUT',
    body: content,
    headers: { 'Content-Type': 'application/octet-stream' },
  })
}

export { fetchIndex, fetchFile, putFile }

