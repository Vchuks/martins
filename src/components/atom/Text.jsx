import PropTypes from "prop-types"

const Text = ({className, body}) => {
  return (
    <p className={className}>
      {body}
    </p>
  )
}

Text.propTypes = {
    className: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}
export default Text
