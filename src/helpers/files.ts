export function dataURLtoFile(
	dataurl: string,
	filename: string,
): File | undefined {
	const arr = dataurl.split(',')

	if (arr[0] === null) {
		return undefined
	}

	const mime = arr[0].match(/:(.*?);/)![1]
	const bstr = atob(arr[1])

	let n = bstr.length
	const u8arr = new Uint8Array(n)

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}

	return new File([u8arr], filename, { type: mime })
}

export function resizeFileDimensions(
	file: File,
	width = 1280,
	quality = 0.8,
): Promise<File> {
	let objectURL = undefined

	return new Promise<File>((resolve, reject) => {
		const image = new Image()

		image.onload = () => {
			const baseOfComparison =
				image.width >= image.height ? image.width : image.height

			if (baseOfComparison <= width) {
				resolve(file)
				return
			}

			const oc = document.createElement('canvas')
			const octx = oc.getContext('2d')

			if (octx === null) {
				reject('an error occured in resizing image')
				return
			}

			if (image.width >= image.height) {
				oc.width = width
				oc.height = (oc.width / image.width) * image.height
			} else {
				oc.height = width
				oc.width = (oc.height / image.height) * image.width
			}

			octx.drawImage(image, 0, 0, oc.width, oc.height)

			const resizedFile = dataURLtoFile(
				oc.toDataURL(file.type, quality),
				file.name,
			)

			if (resizedFile === undefined) {
				reject('an error occured in resizing image')
			} else {
				resolve(resizedFile)
			}
		}

		image.src = objectURL = URL.createObjectURL(file) as string
	}).finally(() => {
		URL.revokeObjectURL(objectURL)
	})
}
