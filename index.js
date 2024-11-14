const Notification = props => {
  //  Write your code here.
  const {logo, name, className} = props
  return (
    <div className={`item ${className}`}>
      <img src={logo} className='logo' />
      <p className='msg'>{name}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='card'>
      <Notification
        logo='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        name='Informational Message'
        className='primary'
      />
      <Notification
        logo='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        name='Success Message'
        className='success'
      />
      <Notification
        logo='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        name='Warning Message'
        className='warning'
      />
      <Notification
        logo='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        name='Error Message'
        className='danger'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
