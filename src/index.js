import x from './x.js'
console.log('我是index.js文件')
console.log(x)
// import lanjiazai from './lanjiazai.js'

import png from './assets/01.png' //引入图片
console.log(png)

const div = document.querySelector('#app')

div.innerHTML = `
    <img src = '${png}'/>
`

const button = document.createElement('button')
button.innerText = '懒加载按钮'
button.onclick = () => {
    const promise = import('./lanjiazai.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('加载失败')
    })
}
div.appendChild(button)