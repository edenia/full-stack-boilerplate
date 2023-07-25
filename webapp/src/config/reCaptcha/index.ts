const config = {
  key: process.env.NEXT_PUBLIC_RE_CAPTCHA_KEY || '',
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS || '',
  projectId: process.env.RE_CAPTCHA_PROJECT_ID || ''
}

export default config
