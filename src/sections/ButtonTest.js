import React from 'react'
import Button from '../components/Button'

const ButtonTest = () => {
	return (
		<section>
			<div class='grid'>
				<h4 class='heading'>Button test</h4>
				<h5 class='heading'>Colours</h5>
				<div class='row'>
					<Button link='#'>Dark</Button>
					<Button link='#' background='clay'>
						Clay
					</Button>
					<Button link='#' background='yellow'>
						Yellow
					</Button>
					<Button link='#' background='mint'>
						Mint
					</Button>
					<Button link='#' background='purple'>
						Purple
					</Button>
					<Button link='#' background='white'>
						White (static)
					</Button>
					<Button link='#' background='black'>
						Black (static)
					</Button>
					<Button link='#' background='light'>
						Light (dynamic)
					</Button>
					<Button link='#' background='dark'>
						Dark (dynamic)
					</Button>
				</div>
				<h5 class='heading'>Sizes</h5>
				<div class='row'>
					<Button link='#' size='large'>
						Large
					</Button>
					<Button link='#'>Normal</Button>
				</div>
				<h5 class='heading'>Shapes</h5>
				<div class='row'>
					<Button link='#'>Square</Button>
					<Button link='#' shape='rounded'>
						Rounded
					</Button>
					<Button link='#' shape='round'>
						Round
					</Button>
				</div>
				<h5 class='heading'>Icon</h5>
				<div class='row'>
					<Button link='#' iconLeft='ri-home-line'>
						Left
					</Button>
					<Button link='#' iconRight='ri-menu-line'>
						Right
					</Button>
				</div>
			</div>
		</section>
	)
}

export default ButtonTest
