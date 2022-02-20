import React from 'react';
import Button from '../components/Button'

class ButtonTest extends React.Component {
	render() {
		return (
			<section>
				<div class="grid">
					<h4 class="heading">Button test</h4>
					<h5 class="heading">Colours</h5>
					<div class="row">
						<Button link="#">Dark</Button>
						<Button link="#" background="clay">Clay</Button>
						<Button link="#" background="yellow">Yellow</Button>
						<Button link="#" background="mint">Mint</Button>
						<Button link="#" background="purple">Purple</Button>
					</div>
					<h5 class="heading">Sizes</h5>
					<div class="row">
						<Button link="#" size="large">Large</Button>
						<Button link="#">Normal</Button>
					</div>
					<h5 class="heading">Shapes</h5>
					<div class="row">
						<Button link="#">Square</Button>
						<Button link="#" shape="rounded">Rounded</Button>
						<Button link="#" shape="round">Round</Button>
					</div>	
				</div>

			</section>
		);
	}
}

export default ButtonTest