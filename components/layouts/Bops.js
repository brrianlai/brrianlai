import React from 'react'

const bopList = [
	{
		name: 'NIKI - Every Summertime',
		link: 'https://www.youtube.com/watch?v=a0OHkWX7B-E'
	},
	{
		name: 'Ren Ran - 雀跃',
		link: 'https://www.youtube.com/watch?v=3QOmooM3b8I'
	},
	{
		name: 'Tia Ray - On the Clouds',
		link: 'https://www.youtube.com/watch?v=dWUUHloolgE'
	},
	{
		name: 'Hứa Kim Tuyền, Hoàng Duyên - Sài Gòn Đau Lòng Quá',
		link: 'https://www.youtube.com/watch?v=BdPk9ipvczM'
	},
	{
		name: 'Issues - Beautiful Oblivion',
		link: 'https://www.youtube.com/watch?v=AZ8VEstc5IM'
	},
	{
		name: 'Ren Ran - 从小到大',
		link: 'https://www.youtube.com/watch?v=3cAbKahikj8'
	},
	{
		name: 'DeVita - Show Me',
		link: 'https://www.youtube.com/watch?v=o97NRF_2KAY'
	},
	{
		name: 'JSOL, Hoàng Duyên - Sài Gòn Hôm Nay Mưa',
		link: 'https://www.youtube.com/watch?v=mnBAZ-VkuEg'
	},
	{
		name: 'Nana Ou-Yang - Tell Me You Do Too',
		link: 'https://www.youtube.com/watch?v=4iAABDI2Y-c'
	},
	{
		name: 'Tia Ray - Little Too Much',
		link: 'https://www.youtube.com/watch?v=wSwp1d4L934'
	},
	{
		name: 'NIKI - La La Lost You (Acoustic)',
		link: 'https://www.youtube.com/watch?v=5YlJt5EYrlM'
	},
	{
		name: 'IU - Dear Name',
		link: 'https://www.youtube.com/watch?v=JSOBF_WhqEM'
	},
	{
		name: 'DeVita - Movies',
		link: 'https://www.youtube.com/watch?v=Ct-AZOM72mU'
	},
	{
		name: 'BIBI - Kazino',
		link: 'https://www.youtube.com/watch?v=ObzvA8tx9aA'
	},
	{
		name: 'Soul Dot - what are we?',
		link: 'https://www.youtube.com/watch?v=DX6Oj_dj3GE'
	},
	{
		name: 'issues - No Problem (Keep It Alive)',
		link: 'https://www.youtube.com/watch?v=AOLzJUEX6Ds'
	},
	{
		name: 'softy, Jword, Hayne - time to be with you',
		link: 'https://www.youtube.com/watch?v=meUoeZ6MHM8'
	},
	{
		name: 'McKay - You Will Never Know',
		link: 'https://www.youtube.com/watch?v=Nux6CdWeHKY'
	},
	{
		name: 'Ren Ran - 空空如也',
		link: 'https://www.youtube.com/watch?v=G2jfo3ljyd4'
	},
	{
		name: 'Paramore - Pool',
		link: 'https://www.youtube.com/watch?v=3m8ElO9Y50Y'
	}
]

const Bops = () => {
	return (
		<section data-background='mint'>
			<h4 className='heading'>Current bops</h4>
			<div className='array'>
				{bopList.map((bop, index) => (
					<a href={bop.link} key={index}>{bop.name}</a>
				))}
			</div>
		</section>
	)
}

export default Bops
