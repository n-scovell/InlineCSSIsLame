export default { 
    data() {
        return {
            styleAttribute:'n8style',
            styleBuild:'',
        }
    },
    methods: {
        addingCSS() {
            let ass = 'av'
            const styleSheet = document.createElement('style');
            const ch = document.getElementsByTagName("*")
            for (let i = 0; i < ch.length; i++) {
                const cont = ch[i]
                if (cont && cont.hasAttribute(this.styleAttribute)) {
                    let atVal = cont.getAttribute(this.styleAttribute)
                    cont.classList.add(`${ass}${i}`)
                    this.styleBuild += `.${ass}${i} {${atVal}}`
                    cont.removeAttribute(this.styleAttribute)
                }
            }
            styleSheet.textContent = `
                ${this.styleBuild}
            `
            document.head.appendChild(styleSheet);
        }, 
    },
    mounted() {
        this.addingCSS()
    }
}