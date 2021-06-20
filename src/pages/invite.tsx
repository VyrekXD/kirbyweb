import React from 'react'
import Redirect from '../components/redirect'

const Invite = () => (
	<React.Fragment>
		<Redirect url='https://discord.com/api/oauth2/authorize?client_id=770308348766584883&permissions=388160&scope=bot%20applications.commands' />
	</React.Fragment>
)

export default Invite
