// imageGrid.js
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MasonryFlashList } from '@shopify/flash-list'; // Ensure correct import
import ImageCard from './imageCard';
import { getColumnCount, wp } from '../helpers/common';

const ImageGrid = ({ images }) => {
	const columns = getColumnCount()
	return (
		<View style={styles.container}>
			<MasonryFlashList
				data={images}
				numColumns={columns}
				initialNumToRender={1000}
				contentContainerStyle={styles.listContainerStyle}
				renderItem={({ item, index }) => <ImageCard item={item} columns={columns} index={index} />}
				estimatedItemSize={200}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 3,
		width: wp(100)
	}
});

export default ImageGrid;
