import { useEffect, useRef } from 'react'

function useTimeout(callback, delay) {
	const savedCallback = useRef(callback)

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	useEffect(() => {
		const tick = () => {
			savedCallback.current
		}

		if (typeof delay === 'number') {
			let id = setTimeout(tick, delay)
			return () => clearTimeout(id)
		}
	}, [delay])
}

export default useTimeout