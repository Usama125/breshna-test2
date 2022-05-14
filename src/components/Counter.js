import React, { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<button className='count-btn' onClick={() => { setCount(count + 1) }}>Counted {count}</button>
	)
}

export default Counter