export default class Description {
  root 

  props = {
    title: '',
    value: ''
  }

  template = ''

  constructer(root, props) {
    this.root = root
    this.props = props
    this.init(props)
    this.render() 
  }

  init = (props) = {
    this.template = this.createTemplate(props)
  }

  render = () => {
    const { beforeRender, afterRender } = this.props

    beforeRender()

    this.root.appendChild(this.template).onload(() => {
      afterRender()
    })
  }

  createTemplate = (props) => `<div>
    <span>${props.title}</span>
    <span>${props.value}</span>
  </div>`
}