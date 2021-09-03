export default function ncNanoId(prefix = "nc_") {
	return prefix + Math.floor(Math.random() * 999999999) + "_" + Date.now();
}
