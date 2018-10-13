import React from 'react'
import classNames from 'classnames'

const Avatar = ({ title, src, size }) => (
  <span
    title={title}
    className={classNames('image is-circle', size)}
    style={{ backgroundImage: `url(${src})`, margin: '0px 3px' }}
  />
)

export default Avatar
