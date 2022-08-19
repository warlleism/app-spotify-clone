import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native'
import { TouchableOpacity } from 'react-native'

const ExplodingHeart = ({ onChange, status, width, containerStyle }) => {
	const [isFavorite, setFavorite] = useState(false)
	const [animation, setAnimation] = useState(null)

	useEffect(() => {
		if (isFavorite) {
			animation?.play()
		} else {
			animation?.reset()
		}
	}, [isFavorite])

	useEffect(() => {
		setFavorite(status)
	}, [status])

	const toggleStatus = () => {
		if (onChange) {
			onChange(!isFavorite)
		}
		setFavorite(!isFavorite)
	}

	return (
		<TouchableOpacity onPress={() => toggleStatus()}>
			<LottieView
				style={{ width: 80 }}
				speed={1.5}
				autoPlay={false}
				loop={false}
				resizeMode='contain'
				ref={(animation) => setAnimation(animation)}
				source={require('../assets/lottie/explodingHeart.json')}
			/>
		</TouchableOpacity>
	)
}

export default ExplodingHeart
