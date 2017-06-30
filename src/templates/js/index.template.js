function generateReduxConnect(COMPONENT_NAME) {
  return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}.js'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(${COMPONENT_NAME})
`
}

function generateIndexFile(COMPONENT_NAME, connected) {
  if (connected) {
    return generateReduxConnect(COMPONENT_NAME)
  }

  return `import template from './${COMPONENT_NAME}.js'

const ${COMPONENT_NAME} = template

export default ${COMPONENT_NAME}
`
}

export default generateIndexFile
