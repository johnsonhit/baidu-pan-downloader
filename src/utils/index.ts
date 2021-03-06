export const formatByte = (byte: number) => {
  if (byte <= 1000) {
    return `${byte} B`
  }
  const KiByte = Math.round(byte / 1024)
  return KiByte <= 1000 ? `${KiByte} KB` : `${Math.round(KiByte / 10.24) / 100} MB`
}
