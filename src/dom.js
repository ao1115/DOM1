window.dom = {
    create(string) {
        const container = document.createElement("template") //template容纳所有东西的容器，比如td也可以
        container.innerHTML = string.trim() //trim删除字符串两边的空格
        return container.content.firstChild
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2,node)
    },
    append(parent,node) { //加儿子
        parent.appendChild(node)
    },
    wrap(node, parent) { //加爸爸
        dom.before(node, parent)
        dom.append(parent,node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){ //删除后代
        const array = []
        let x = node.firstChild
        while(x){
          array.push(dom.remove(node.firstChild))
          x = node.firstChild
        }
        return array
    } ,
    attr(node, name, value){ // 重载（根据传的参数的个数决定实现的效果）
        if(arguments.length === 3){
          node.setAttribute(name, value)
        }else if(arguments.length === 2){
          return node.getAttribute(name)
        }
      },
      text(node, string){ // 适配
        if(arguments.length ===2 ){
          if('innerText' in node){
            node.innerText = string 
          }else{
            node.textContent = string 
          }
        }else if(arguments.length === 1){
          if('innerText' in node){
            return node.innerText
          }else{
            return node.textContent
          }
        }
      },
      html(node, string){
        if(arguments.length === 2){
          node.innerHTML = string
        }else if(arguments.length === 1){
          return node.innerHTML 
        }
      },
      style(node, name, value){
        if(arguments.length===3){
          // dom.style(div, 'color', 'red')
          node.style[name] = value
        }else if(arguments.length===2){
          if(typeof name === 'string'){
            // dom.style(div, 'color')
            return node.style[name]
          }else if(name instanceof Object){
            // dom.style(div, {color: 'red'})
            const object = name
            for(let key in object){
              node.style[key] = object[key]
            }
          }
        }
      },
      class: {
        add(node, className){
          node.classList.add(className)
        },
        remove(node, className){
          node.classList.remove(className)
        },
        has(node, className){
          return node.classList.contains(className)
        }
      },
      on(node, eventName, fn){ //添加监听事件
        node.addEventListener(eventName, fn)
      },
      off(node, eventName, fn){
        node.removeEventListener(eventName, fn)
      },
      find(selector, scope){ //scope在某个范围内查找
        return (scope || document).querySelectorAll(selector)
      },
      parent(node){
        return node.parentNode
      },
      children(node){
        return node.children
      },
      siblings(node){
        return Array.from(node.parentNode.children)
        .filter(n=>n!==node)
      },
      next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
          x = x.nextSibling
        }
        return x
      },
      previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
          x = x.previousSibling
        }
        return x
      },
      each(nodeList, fn){ //遍历所有节点
        for(let i=0;i<nodeList.length;i++){
          fn.call(null, nodeList[i])
        }
      },
      index(node){ //获取排行第几
        const list = dom.children(node.parentNode)
        let i
        for(i=0;i<list.length;i++){
          if(list[i] === node){
            break
          }
        }
        return i
      }
}