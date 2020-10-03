export function isStore(input: any) {
	if (typeof input === 'object' && 'subscribe' in input) {
		return true
	}

	return false
}
