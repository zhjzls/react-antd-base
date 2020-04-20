export function getDataType(params) {
    return Object.prototype.toString.call(params).slice(1, -7).toLowerCase()
}