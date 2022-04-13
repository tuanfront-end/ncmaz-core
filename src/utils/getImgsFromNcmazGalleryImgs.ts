function getImgsFromNcmazGalleryImgs(ncmazGalleryImgs) {
	const {
		image1,
		image2,
		image3,
		image4,
		image5,
		image6,
		image7,
		image8,
	} = ncmazGalleryImgs;

	const arr = [
		(image1 || {}).sourceUrl,
		(image2 || {}).sourceUrl,
		(image3 || {}).sourceUrl,
		(image4 || {}).sourceUrl,
		(image5 || {}).sourceUrl,
		(image6 || {}).sourceUrl,
		(image7 || {}).sourceUrl,
		(image8 || {}).sourceUrl,
	].filter((item) => !!item);

	return arr;
}

export default getImgsFromNcmazGalleryImgs;
