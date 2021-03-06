import {h,div} from '@motorcycle/dom'
import {Col} from 'snabbdom-material'
import {icon} from 'helpers'

// import {Menu} from 'snabbdom-material'
// const Item = Menu.Item

// import 'helpers/listItem/styles.scss'

const fadeInOut = {
  opacity: 0,
  transition: 'opacity 100',
  delayed: {
    opacity: 1,
  },
  remove: {
    opacity: 0,
  },
}

const style = {
  lineHeight: '48px',
  // lineHeight: '64px',
  cursor: 'pointer',
  margin: '0',
  ...fadeInOut,
}

const iconCellStyle = {
  width: '48px',
  'font-size': '24px',
}

const titleStyle = {
  fontSize: '1.3em',
}

const subtitleStyle = {
  color: '#666',
}

export default ({
  iconName, title, subtitle, className, link, key, iconBackgroundColor,
}) =>
  // h('div.row.list-item.clickable.' + className, {
  h('div.row.list-item.' + className, {
    style, attrs: {'data-link': link, 'data-key': key},
  }, [
    iconName ?
      Col(
        {type: 'xs-1', style: iconCellStyle},
        [icon(iconName, 'black', iconBackgroundColor)]
      ) : null,
    Col({type: 'xs-8'},[
      div({style: titleStyle},[title]),
      div({style: subtitleStyle},[subtitle]),
    ]),
  ])
