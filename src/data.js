export default { 
    data() {
        return {
            styleAttribute:'n8style',
            splitMark: ';',
            propsCount:0,
            styleBuild:''
        }
    },
    methods: {
        thisIsWorking(props) {
            const styleSheet = document.createElement('style');
            const ch = document.getElementsByTagName("*")
            for (let i = 0; i < ch.length; i++) {
                const cont = ch[i]
                if (cont && cont.hasAttribute(this.styleAttribute)) {
                    let myOb = props[this.propsCount]
                    cont.classList.add(myOb.cls);
                    this.propsCount++
                    this.styleBuild += `.${myOb.cls} {${myOb.style}}`
                    cont.removeAttribute(this.styleAttribute);
                }
            }
            styleSheet.textContent = `
            ${this.styleBuild}
            `
            document.head.appendChild(styleSheet);
        },
        
    }
}