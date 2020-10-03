import dayjs from 'dayjs'
import 'dayjs/locale/fa'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import jalaliday from 'jalaliday'

export default async function () {
	dayjs.extend(customParseFormat)
	// dayjs.extend(jalaliday)
	// dayjs.locale('fa')
	// @ts-ignore
	// dayjs.calendar('jalali')
}
