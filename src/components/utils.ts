function fixUrl(url: string): string {
	if( import.meta.env.MODE === 'development' ) {
		return 'http://localhost:1337' + url
	} else {
		return url
	}
}

export { fixUrl }


function fixImg(img: string) {
	if (img.startsWith("http")){
		return img
	} else {
		return fixUrl(`/img/${img}`)
	}
}

export { fixImg }
