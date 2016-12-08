/**
 * Created by yuanxiu on 2016/12/8.
 */
new Vue({
    el: '#editor',
    data: {
        input: '# hello world!'
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true })
        }
    },
    methods: {
        update: function (e) {
            this.input = e.target.value
        }
    }
})