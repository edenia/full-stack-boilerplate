/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Routes {
  name?: string
  path?: string
  component: React.FC | undefined
  childrens?: any
  header?: string
  badge?: string
  roles?: Array<string>
  icon?: React.ReactElement
}
