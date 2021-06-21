const div = dom.create("<td>11</td>")
console.log(div)


const div3 = dom.create("<div>333333</div>")
dom.after(div1, div3)
console.log()

const div4 = dom.create("<div>加在前面</div>")
dom.after(div1, div4)

const div5 = dom.create("<div>加个儿子</div>")
dom.append(div1, div5)

const div6 = dom.create("<div id = 'parent'></div>")
dom.wrap(div2, div6)

console.log(dom.remove(div3))


console.log(dom.empty(window.empty))


dom.attr(div1, 'title', 'test') //添加title
const title = dom.attr(div1,'title') //读取title
console.log(`title:${title}`)

dom.text(div1, "改里面的文本内容")  //修改文本内容
console.log(dom.text(div1))  //查看文本内容

dom.style(div1, 'color', 'red')
console.log(dom.style(div1, 'color'))
dom.style(div1, { color: 'blue' })

dom.class.add(div1, 'test')

dom.on(div1, 'click', fn = () => {
    console.log('点击了')
})

const test2 = dom.find('#div2')[0]
console.log(dom.find('.find', test2)[0])

console.log(dom.parent(div2))

console.log(dom.siblings(div1))

console.log(dom.next(empty))
console.log(dom.previous(empty))

const t = dom.find('.red')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(t3))