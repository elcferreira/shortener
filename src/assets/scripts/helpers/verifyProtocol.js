const verifyProtocol = url => (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://")) ? url : "http://"+url

export default verifyProtocol
