import { ref, watch } from "vue";
import { fetchFile, putFile } from "../utils";

type Node = NodeFolder | NodeDocument
type NodeFolder = { type: 'folder', name: string, nodes: Node[] }
type NodeDocument = { type: 'document', name: string }

type DocIndex = {
  nodes: NodeDocument[]
}

const hook = () => {
  const index = ref<DocIndex>({
    nodes: [
      { type: 'document', name: '正则表达式', },
      { type: 'document', name: 'Docker', },
      { type: 'document', name: 'Git', },
    ]
  })
  const loading = ref<boolean>(false)
  const filename = ref<string>('')
  const content = ref<string>('')

  let timer: NodeJS.Timeout;

  watch(content, () => {
    timer && clearTimeout(timer)
    timer = setTimeout(saveContent, 5000)
  })

  function loadContent(name: string) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      return
    }
    loading.value = true
    fetchFile(name).then(res => {
      content.value = res
      filename.value = name
    }).catch(() => { }).finally(() => {
      loading.value = false
    })
  }

  function saveContent() {
    if (typeof filename.value !== 'string' || filename.value.trim().length === 0) {
      return
    }
    loading.value = true
    putFile(filename.value, content.value).finally(() => {
      loading.value = false
    })
  }

  return { index, content, loadContent, saveContent }
}



export { DocIndex }
export default hook