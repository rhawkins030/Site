async function init() {
    const node = document.querySelector("#type-text")

    await sleep(1000)
    node.innerText = ""


    while (true) {
      await node.type("RELIABILITY")
      await sleep(3000)
      await node.delete("RELIABILITY")
      await node.type("QUALITY")
      await sleep(3000)
      await node.delete('QUALITY')
      await node.type("SPEEDY  SUPPORT")
      await sleep(3000)
      await node.delete("SPEEDY  SUPPORT")
    }
  }

  const sleep = time => new Promise(resolve => setTimeout(resolve, time))

  class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }

    async type(text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }

    async delete(text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length - 1)
        await sleep(this.typeInterval)
      }
    }
  }

  customElements.define('type-async', TypeAsync, { extends: 'span' })
  init()